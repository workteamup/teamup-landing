"use client";

import React from "react";
import Link from "next/link";

export default function DesignSystem() {
  function getTealColor(shade) {
    const colors = {
      50: "#ECFAFF",
      100: "#D9F5FE",
      200: "#C5F0FE",
      300: "#B0EBFD",
      400: "#9AE5FC",
      500: "#82E0FB",
      600: "#67DAFA",
      700: "#52B1CC",
      800: "#3F8A9F",
      900: "#2C6575",
    };
    return colors[shade];
  }

  function getBlueColor(shade) {
    const colors = {
      50: "#E4EFFF",
      100: "#C9DFFF",
      200: "#AECEFF",
      300: "#93BEFD",
      400: "#78ADFB",
      500: "#5C9BF9",
      600: "#3F89F6",
      700: "#326FC8",
      800: "#25559D",
      900: "#183D73",
    };
    return colors[shade];
  }

  function getPurpleColor(shade) {
    const colors = {
      50: "#E6E9FF",
      100: "#CDD3FF",
      200: "#B5BDFF",
      300: "#9EA7FE",
      400: "#8990FC",
      500: "#7578F9",
      600: "#635DF5",
      700: "#4F4AC8",
      800: "#3C389C",
      900: "#2A2773",
    };
    return colors[shade];
  }

  function getBrandColor(shade) {
    const colors = {
      50: "#E0E2E7",
      100: "#C3C6CF",
      200: "#A6ABB8",
      300: "#8A90A1",
      400: "#6F768B",
      500: "#555D75",
      600: "#3C4560",
      700: "#252E4B",
      800: "#1D253D",
      900: "#161C30",
    };
    return colors[shade];
  }

  function getDarkColor(color) {
    const colors = {
      black: "#ECEFF6",
      phantom: "#D3D5E1",
      arsenic: "#BCC0CC",
      graphite: "#9CA2B2",
      space: "#6E7180",
      steel: "#40424E",
      smoke: "#1F1E24",
      cloud: "#000000",
    };
    return colors[color];
  }

  // Add a style for headings to ensure Poppins is applied
  const headingStyle = {
    fontFamily: "'Poppins', sans-serif",
  };

  const bodyStyle = {
    fontFamily: "'Manrope', sans-serif",
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <p className="font-poppins text-lg mb-8">
        This paragraph is using the Poppins font. If you can see this in
        Poppins, the font is working correctly!
      </p>

      <header className="mb-12">
        <h1 className="font-poppins text-4xl font-bold text-brand-700 mb-2">
          Design System
        </h1>
        <p className="text-dark-space text-lg">
          A comprehensive guide to our brand styles and components
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="font-poppins text-2xl font-semibold text-brand-700 mb-6 pb-2 border-b border-dark-phantom">
          Typography
        </h2>

        <div className="mb-8">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Headings (Poppins)
          </h3>
          <div className="space-y-4">
            <div>
              <h1 className="font-poppins text-5xl font-bold">Heading 1</h1>
              <p className="text-dark-space text-sm mt-1">
                font-poppins text-5xl font-bold
              </p>
            </div>
            <div>
              <h2 className="font-poppins text-4xl font-bold">Heading 2</h2>
              <p className="text-dark-space text-sm mt-1">
                font-poppins text-4xl font-bold
              </p>
            </div>
            <div>
              <h3 className="font-poppins text-3xl font-semibold">Heading 3</h3>
              <p className="text-dark-space text-sm mt-1">
                font-poppins text-3xl font-semibold
              </p>
            </div>
            <div>
              <h4 className="font-poppins text-2xl font-semibold">Heading 4</h4>
              <p className="text-dark-space text-sm mt-1">
                font-poppins text-2xl font-semibold
              </p>
            </div>
            <div>
              <h5 className="font-poppins text-xl font-medium">Heading 5</h5>
              <p className="text-dark-space text-sm mt-1">
                font-poppins text-xl font-medium
              </p>
            </div>
            <div>
              <h6 className="font-poppins text-lg font-medium">Heading 6</h6>
              <p className="text-dark-space text-sm mt-1">
                font-poppins text-lg font-medium
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Body Text (Manrope)
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-2xl">Large Text (text-2xl)</p>
              <p className="text-dark-space text-sm mt-1">text-2xl</p>
            </div>
            <div>
              <p className="text-xl">Extra Large (text-xl)</p>
              <p className="text-dark-space text-sm mt-1">text-xl</p>
            </div>
            <div>
              <p className="text-lg">Large (text-lg)</p>
              <p className="text-dark-space text-sm mt-1">text-lg</p>
            </div>
            <div>
              <p className="text-base">Base (text-base)</p>
              <p className="text-dark-space text-sm mt-1">text-base</p>
            </div>
            <div>
              <p className="text-sm">Small (text-sm)</p>
              <p className="text-dark-space text-sm mt-1">text-sm</p>
            </div>
            <div>
              <p className="text-xs">Extra Small (text-xs)</p>
              <p className="text-dark-space text-sm mt-1">text-xs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palettes Section */}
      <section className="mb-16">
        <h2 className="font-poppins text-2xl font-semibold text-brand-700 mb-6 pb-2 border-b border-dark-phantom">
          Color Palettes
        </h2>

        {/* Teal Palette */}
        <div className="mb-10">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Teal Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`teal-${shade}`} className="flex flex-col">
                <div
                  className={`h-20 rounded-t-lg flex items-end p-2 bg-teal-${shade}`}
                ></div>
                <div className="bg-white p-2 rounded-b-lg shadow-sm border border-dark-phantom border-t-0">
                  <p className="font-medium">Teal {shade}</p>
                  <p className="text-xs text-dark-space">bg-teal-{shade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Palette */}
        <div className="mb-10">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Blue Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`blue-${shade}`} className="flex flex-col">
                <div
                  className={`h-20 rounded-t-lg flex items-end p-2 bg-blue-${shade}`}
                ></div>
                <div className="bg-white p-2 rounded-b-lg shadow-sm border border-dark-phantom border-t-0">
                  <p className="font-medium">Blue {shade}</p>
                  <p className="text-xs text-dark-space">bg-blue-{shade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purple Palette */}
        <div className="mb-10">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Purple Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`purple-${shade}`} className="flex flex-col">
                <div
                  className={`h-20 rounded-t-lg flex items-end p-2 bg-purple-${shade}`}
                ></div>
                <div className="bg-white p-2 rounded-b-lg shadow-sm border border-dark-phantom border-t-0">
                  <p className="font-medium">Purple {shade}</p>
                  <p className="text-xs text-dark-space">bg-purple-{shade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Dark Palette */}
        <div className="mb-10">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Brand Dark Palette
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={`brand-${shade}`} className="flex flex-col">
                <div
                  className={`h-20 rounded-t-lg flex items-end p-2 bg-brand-${shade}`}
                ></div>
                <div className="bg-white p-2 rounded-b-lg shadow-sm border border-dark-phantom border-t-0">
                  <p className="font-medium">Brand {shade}</p>
                  <p className="text-xs text-dark-space">bg-brand-{shade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Colors */}
        <div>
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Dark Colors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "black",
              "phantom",
              "arsenic",
              "graphite",
              "space",
              "steel",
              "smoke",
              "cloud",
            ].map((color) => (
              <div key={`dark-${color}`} className="flex flex-col">
                <div
                  className={`h-20 rounded-t-lg flex items-end p-2 bg-dark-${color}`}
                ></div>
                <div className="bg-white p-2 rounded-b-lg shadow-sm border border-dark-phantom border-t-0">
                  <p className="font-medium">Dark {color}</p>
                  <p className="text-xs text-dark-space">bg-dark-{color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="mb-16">
        <h2 className="font-poppins text-2xl font-semibold text-brand-700 mb-6 pb-2 border-b border-dark-phantom">
          Buttons
        </h2>

        {/* Primary Buttons */}
        <div className="mb-8">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Primary Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-poppins font-medium py-2 px-4 rounded">
              Teal Button
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-2 px-4 rounded">
              Blue Button
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-poppins font-medium py-2 px-4 rounded">
              Purple Button
            </button>
            <button className="bg-brand-700 hover:bg-brand-800 text-white font-poppins font-medium py-2 px-4 rounded">
              Brand Button
            </button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="mb-8">
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Secondary Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-poppins font-medium py-2 px-4 rounded">
              Teal Outline
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-poppins font-medium py-2 px-4 rounded">
              Blue Outline
            </button>
            <button className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-poppins font-medium py-2 px-4 rounded">
              Purple Outline
            </button>
            <button className="bg-white border-2 border-brand-700 text-brand-700 hover:bg-brand-50 font-poppins font-medium py-2 px-4 rounded">
              Brand Outline
            </button>
          </div>
        </div>

        {/* Button Sizes */}
        <div>
          <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
            Button Sizes
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-1 px-2 text-xs rounded">
              Extra Small
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-1.5 px-3 text-sm rounded">
              Small
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-2 px-4 rounded">
              Medium
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-3 px-6 text-lg rounded">
              Large
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-16">
        <h2 className="font-poppins text-2xl font-semibold text-brand-700 mb-6 pb-2 border-b border-dark-phantom">
          Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-dark-phantom">
            <h3 className="font-poppins text-brand-700 text-xl font-semibold mb-2">
              Basic Card
            </h3>
            <p className="font-sans text-dark-space mb-4">
              This is a simple card with basic styling using your brand colors.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-2 px-4 rounded">
              Learn More
            </button>
          </div>

          {/* Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-dark-phantom">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-poppins text-brand-700 text-xl font-semibold mb-2">
              Feature Card
            </h3>
            <p className="font-sans text-dark-space mb-4">
              A card highlighting a feature with an icon and your brand colors.
            </p>
            <div className="mt-4 flex space-x-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                Feature
              </span>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                New
              </span>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-teal-600">
            <div className="text-center mb-4">
              <h3 className="font-poppins text-brand-700 text-xl font-semibold">
                Premium Plan
              </h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-dark-space">/month</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-600 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlimited access</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-600 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Premium support</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-600 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Advanced features</span>
              </li>
            </ul>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-poppins font-medium py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="mb-16">
        <h2 className="font-poppins text-2xl font-semibold text-brand-700 mb-6 pb-2 border-b border-dark-phantom">
          Form Elements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
              Input Fields
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="default-input"
                  className="block text-sm font-medium text-dark-space mb-1"
                >
                  Default Input
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="w-full px-3 py-2 border border-dark-phantom rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your text"
                />
              </div>

              <div>
                <label
                  htmlFor="disabled-input"
                  className="block text-sm font-medium text-dark-space mb-1"
                >
                  Disabled Input
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  className="w-full px-3 py-2 border border-dark-phantom rounded-md bg-dark-black cursor-not-allowed"
                  placeholder="Disabled input"
                  disabled
                />
              </div>

              <div>
                <label
                  htmlFor="error-input"
                  className="block text-sm font-medium text-red-600 mb-1"
                >
                  Error Input
                </label>
                <input
                  type="text"
                  id="error-input"
                  className="w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Error input"
                />
                <p className="mt-1 text-sm text-red-600">
                  This field is required
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
              Selection Controls
            </h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-dark-phantom rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm text-dark-space"
                >
                  Default Checkbox
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="default-radio"
                  type="radio"
                  name="radio-group"
                  className="h-4 w-4 text-purple-600 border-dark-phantom focus:ring-purple-500"
                />
                <label
                  htmlFor="default-radio"
                  className="ml-2 text-sm text-dark-space"
                >
                  Default Radio Button
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="second-radio"
                  type="radio"
                  name="radio-group"
                  className="h-4 w-4 text-purple-600 border-dark-phantom focus:ring-purple-500"
                />
                <label
                  htmlFor="second-radio"
                  className="ml-2 text-sm text-dark-space"
                >
                  Second Radio Button
                </label>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="default-select"
                  className="block text-sm font-medium text-dark-space mb-1"
                >
                  Select Menu
                </label>
                <select
                  id="default-select"
                  className="w-full px-3 py-2 border border-dark-phantom rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts and Notifications */}
      <section>
        <h2 className="font-poppins text-2xl font-semibold text-brand-700 mb-6 pb-2 border-b border-dark-phantom">
          Alerts and Notifications
        </h2>

        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  This is an informational message.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Your changes have been saved successfully.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Warning: This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Error: Something went wrong. Please try again.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-purple-800">
                  Custom Notification
                </h3>
                <div className="mt-2 text-sm text-purple-700">
                  <p>This is a custom notification with your brand colors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Font Test Section */}
      <div className="mb-8">
        <h3 className="font-poppins text-xl font-medium text-brand-600 mb-4">
          Font Test Section
        </h3>
        <div className="space-y-4">
          <div>
            <p className="font-poppins text-lg">
              This text should be in Poppins using Tailwind class
            </p>
            <p className="text-xs text-dark-space mt-1">
              Class: font-poppins text-lg
            </p>
          </div>
          <div>
            <p className="font-sans text-lg">
              This text should be in Manrope using Tailwind class
            </p>
            <p className="text-xs text-dark-space mt-1">
              Class: font-sans text-lg
            </p>
          </div>
          <div>
            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-lg"
            >
              This text should be in Poppins using inline style
            </p>
            <p className="text-xs text-dark-space mt-1">
              Style: font-family: 'Poppins, sans-serif'
            </p>
          </div>
          <div>
            <p
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="text-lg"
            >
              This text should be in Manrope using inline style
            </p>
            <p className="text-xs text-dark-space mt-1">
              Style: font-family: 'Manrope, sans-serif'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
