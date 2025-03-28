"use client";

import Button from "./button";
import { semanticColors } from "../../lib/design-tokens";

/**
 * Component that showcases all the button variations
 * for reference and documentation.
 */
const ButtonExamples = () => {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Primary Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Secondary Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="md">
            Medium
          </Button>
          <Button variant="secondary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Outline Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="md">
            Medium
          </Button>
          <Button variant="outline" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Text Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="text" size="sm">
            Small
          </Button>
          <Button variant="text" size="md">
            Medium
          </Button>
          <Button variant="text" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Gradient Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient" size="sm">
            Small
          </Button>
          <Button variant="gradient" size="md">
            Medium
          </Button>
          <Button variant="gradient" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Link Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button href="#" size="md">
            Link Button
          </Button>
          <Button href="#" variant="secondary" size="md">
            Secondary Link
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Full Width Buttons
        </h2>
        <div className="space-y-4 max-w-md">
          <Button fullWidth>Full Width Primary</Button>
          <Button variant="secondary" fullWidth>
            Full Width Secondary
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Buttons with Icons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Add Item
          </Button>
          <Button
            variant="secondary"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          >
            Next Step
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-phantom">
          Disabled Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples;
