import React from "react";
import Container from "./Container"; // Ensure this import matches your project structure
import Image from "next/image";

// Define types for props
interface StatItemProps {
  title: string;
  description: string;
  icon: IconName;
}

type IconName = "chat-icon" | "location-icon"; // Add more as needed

interface StatsProps {}

// SvgIcon component
const SvgIcon: React.FC<SvgIconProps> = ({ name }) => {
  const chatIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
    >
      {/* SVG paths for chat icon */}
    </svg>
  );

  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
    >
      {/* SVG paths for location icon */}
    </svg>
  );

  switch (name) {
    case "chat-icon":
      return chatIcon;
    case "location-icon":
      return locationIcon;
    default:
      return null; // Or return a fallback icon or nothing
  }
};

// Props interface for SvgIcon
interface SvgIconProps {
  name: IconName;
}

const Stats: React.FC<StatsProps> = () => {
  return (
    <div id="solution">
      <Container>
        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <Image
              src="/images/pie.svg"
              alt="Pie chart representing data"
              loading="lazy"
              width={600} // Example width, adjust based on actual size
              height={400} // Example height, adjust based on actual size
              className="w-full"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Nuxt development is carried out by passionate developers
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              Your detailed paragraph here...
            </p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <StatItem
                title="Chat Anytime"
                description="Description..."
                icon="chat-icon"
              />
              <StatItem
                title="Real Time Location"
                description="Description..."
                icon="location-icon"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

// Extracted StatItem component
const StatItem: React.FC<StatItemProps> = ({ title, description, icon }) => (
  <div className="flex gap-4 md:items-center">
    <div className={`w-12 h-12 flex gap-4 rounded-full ${getBgColor(icon)}`}>
      <SvgIcon name={icon} />
    </div>
    <div className="w-5/6">
      <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
        {title}
      </h4>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

// Utility function to determine background color based on icon name
const getBgColor = (iconName: IconName): string => {
  switch (iconName) {
    case "chat-icon":
      return "bg-indigo-100 dark:bg-indigo-900/20";
    case "location-icon":
      return "bg-teal-100 dark:bg-teal-900/20";
    default:
      return "";
  }
};

export default Stats;
