"use client";

import { useEffect, useState } from "react";
import i18next, { FlatNamespace, KeyPrefix } from "i18next";
import {
    initReactI18next,
    useTranslation as useTranslationOrg,
    UseTranslationOptions,
    UseTranslationResponse,
    FallbackNs
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

// Check if running on server
const runsOnServerSide = typeof window === "undefined";

// Initialise i18next under React with language detection and loading of JSON translations
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            // Import JSON file for requested language or namespace
            (language: string, namespace: string) => {
                return import(`./locales/${language}/${namespace}.json`);
            }
        )
    )
    .init({
    // Import our configs from i18n settings file
        ...getOptions(),
        // For auto detection of client language
        lng: undefined,
        detection: {
            order: ["path", "htmlTag", "cookie", "navigator"]
        },
        preload: runsOnServerSide ? languages : []
    });

export function useTranslation<
    Namespace extends FlatNamespace,
    KeyPrefixType extends KeyPrefix<FallbackNs<Namespace>> = undefined
>(
    language: string,
    namespace?: Namespace,
    options?: UseTranslationOptions<KeyPrefixType>
): UseTranslationResponse<FallbackNs<Namespace>, KeyPrefixType> {
    const [cookies, setCookie] = useCookies([cookieName]);

    const returnValue = useTranslationOrg(namespace, options);
    const { i18n } = returnValue;

    if (runsOnServerSide && language && i18n.resolvedLanguage !== language) {
        i18n.changeLanguage(language);
    } else {
        const [activeLanguage, setActiveLanguage] = useState(i18n.resolvedLanguage);

        useEffect(() => {
            if (activeLanguage === i18n.resolvedLanguage) {
                return;
            }
            setActiveLanguage(i18n.resolvedLanguage);
        }, [activeLanguage, i18n.resolvedLanguage]);

        useEffect(() => {
            if (!language || i18n.resolvedLanguage === language) {
                return;
            }
            i18n.changeLanguage(language);
        }, [language, i18n]);

        useEffect(() => {
            if (cookies.i18next === language) {
                return;
            }
            setCookie(cookieName, language, { path: "/" });
        }, [language, cookies.i18next]);
    }

    return returnValue;
}