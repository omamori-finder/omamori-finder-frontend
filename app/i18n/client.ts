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
    Ns extends FlatNamespace,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
    lng: string,
    ns?: Ns,
    options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
    // Store and receive current language with cookies
    const [cookies, setCookie] = useCookies([cookieName]);

    // Get default i18n useTranslation hook
    const returnValue = useTranslationOrg(ns, options);
    const { i18n } = returnValue;
    // If server language is different to selected language, change language to preferred language
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
    } else {
    // Track current active language in component
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

        useEffect(() => {
            // Update state when language changes
            if (activeLng === i18n.resolvedLanguage) {
                return;
            }
            setActiveLng(i18n.resolvedLanguage);
        }, [activeLng, i18n.resolvedLanguage]);

        // Switch language when preference changed
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) {
                return;
            }
            i18n.changeLanguage(lng);
        }, [lng, i18n]);

        // Store language in cookie
        useEffect(() => {
            if (cookies.i18next === lng) {
                return;
            }
            setCookie(cookieName, lng, { path: "/" });
        }, [lng, cookies.i18next]);
    }
    return returnValue;
}