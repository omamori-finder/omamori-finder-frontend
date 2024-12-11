"use client";
import { FormEvent, useState, ChangeEvent } from "react";
import { isValidGoogleMapsLink } from "@/app/_utils/validations";

const Submission = () => {
  // Handle submissions
  const handleSubmit = (e: FormEvent) => {
    return;
  };

  return (
    <div>
      <h1>Submit Omamori</h1>
      <form onSubmit={handleSubmit} className="my-8 max-w-80 w-full">
        <div className="flex flex-col w-full">
          <div>
            <label
              htmlFor="submit-shrine-field"
              className="block mb-2 leading-none"
            >
              Shrine name:
            </label>
            <input
              required
              type="text"
              aria-label="shrine name"
              data-test="submit-shrine-field"
              autoCorrect="off"
              className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
              minLength={4}
              maxLength={30}
            />
          </div>
          <div>
            <label
              htmlFor="submit-google-link-field"
              className="block mb-2 leading-none"
            >
              Google Maps Link:
            </label>
            <input
              required
              type="url"
              aria-label="google maps link"
              data-test="submit-google-link-field"
              autoCorrect="off"
              className="w-full h-10 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2"
            />
          </div>
          <div>
            <label htmlFor="selected-prefecture">Prefecture:</label>
            <select
              id="selected-prefecture"
              name="selected-prefecture"
              required
              className="w-full h-10 p-2 mb-6 border border-solid rounded"
            >
              <option value="">Select a prefecture</option>
              <option value="hokkaido">Hokkaido</option>
              <option value="tohoku">Tohoku</option>
              <option value="kanto">Kanto</option>
              <option value="chubu">Chubu</option>
              <option value="kansai">Kansai</option>
              <option value="chugoku">Chugoku</option>
              <option value="shikoku">Shikoku</option>
              <option value="kyu-oki">Kyushu/Okinawa</option>
            </select>
          </div>
          <div>
            <label htmlFor="selected-luck">Type of luck:</label>
            <select
              id="selected-luck"
              name="selected-luck"
              required
              className="w-full h-10 p-2 mb-6 border border-solid rounded"
            >
              <option value="good-luck">Good Luck</option>
              <option value="health">Health</option>
              <option value="career">Career</option>
              <option value="traffic">Traffic</option>
              <option value="marriage">Marriage</option>
              <option value="pregnancy">Pregnancy</option>
            </select>
          </div>
          <div>
            <label htmlFor="selected-belief">Type of belief:</label>
            <select
              id="selected-belief"
              name="selected-belief"
              required
              className="w-full h-10 p-2 mb-6 border border-solid rounded"
            >
              <option value="shinto">Shinto</option>
              <option value="buddhist">Buddhist</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              required
              aria-label="description"
              data-test="submit-description-field"
              autoCorrect="off"
              className="w-full h-20 p-2 mb-6 border border-solid rounded focus:outline focus:outline-2 focus:outline-offset-2 resize-none"
              rows={4}
              maxLength={500}
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              required
              type="file"
              aria-label="image"
              data-test="submit-image-field"
              accept="image/png, image/jpg, image/jpeg, image/gif, image/webp"
              className="w-full p-2 mb-6"
            />
          </div>
          <div>
            <button className="w-full bg-[var(--primary-button)] rounded-md py-2 px-4">
              <div className="text-center">Submit</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Submission;
