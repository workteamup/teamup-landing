"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import Button from "./button";
import { X } from "lucide-react";

const TeamUpMonth = ({ className = "", containerClassName = "" }) => {
  const [currentDate] = useState(new Date(2025, 4, 1)); // May 2025
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  // Calendar data preparation
  const monthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const monthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startWeekday = monthStart.getDay();

  // Generate array of days in month
  const daysInMonth = monthEnd.getDate();
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Create the calendar grid with empty cells for the days before the first of the month
  const calendarDays = Array(startWeekday).fill(null).concat(monthDays);

  // Mock meeting data
  const meetings = generateMeetings();

  // Handle click event for meeting cells
  const handleMeetingClick = (meeting, day, event) => {
    event.stopPropagation();
    console.log("Meeting clicked:", meeting.title);

    const rect = event.currentTarget.getBoundingClientRect();
    console.log("Position:", rect.left, rect.top);

    // If clicking the same meeting, close it
    if (
      selectedMeeting?.meeting.id === meeting.id &&
      selectedMeeting.day === day
    ) {
      setSelectedMeeting(null);
      return;
    }

    setSelectedMeeting({
      meeting,
      day,
      position: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      },
    });
    console.log("Selected meeting set", meeting.title);
  };

  const closeMeetingDetail = () => {
    setSelectedMeeting(null);
  };

  // Get meetings for a specific day
  const getMeetingsForDay = (day) => {
    return meetings.filter((meeting) => meeting.day === day);
  };

  // Group meetings by team for color coding
  const getTeamColor = (team) => {
    if (team.includes("Software") || team.includes("Development"))
      return "bg-blue-500";
    if (team.includes("Marketing")) return "bg-purple-500";
    if (team.includes("HR")) return "bg-teal-500";
    if (team.includes("Company") || team.includes("Cross-Department"))
      return "bg-brand-500";
    if (team.includes("Customer")) return "bg-purple-700";
    if (team.includes("Product")) return "bg-blue-700";
    if (team.includes("Leadership") || team.includes("Executive"))
      return "bg-brand-800";
    if (team.includes("Sales")) return "bg-purple-800";
    return "bg-brand-400";
  };

  // Get space image
  const getSpaceImage = (space) => {
    const spaceImages = {
      "Planning Space":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/planning_padded.png",
      Auditorium:
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/auditorium_padded.png",
      Campfire:
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/campfire_padded.png",
      "Debate Room":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/debate-room_padded.png",
      "Custom Branded Space":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/custom-branded_padded.png",
      "Connect 4":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/connect4_padded.png",
      "Floor is Lava":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/floor-is-lava_padded.png",
      "The Farmyard":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/farmyard_padded.png",
      "Sailboat Retrospective":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/sailboat-retrospective_padded.png",
      "This or That":
        "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/this-or-that_padded.png",
    };

    return (
      spaceImages[space] ||
      "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/images/default-space.jpg"
    );
  };

  return (
    <section className={cn("w-full px-4", className)}>
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto py-12 lg:py-24",
          containerClassName
        )}
      >
        <div className="mb-6">
          <h2 className="text-3xl lg:text-5xl font-medium text-center mb-2">
            A Month with Team Up!
          </h2>
          <p className="text-lg lg:text-2xl text-dark-graphite text-center mb-12">
            See how different teams leverage Team Up! spaces throughout their
            month
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center">
              <div className="mr-2 h-5 w-5 text-brand-600">
                <CalendarIcon />
              </div>
              <h3 className="text-xl font-semibold">May 2025</h3>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:space-x-4 gap-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm">Software Dev</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm">Marketing</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm">HR</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-brand-500 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm">Company-wide</span>
              </div>
            </div>
          </div>

          {/* Calendar header */}
          <div className="grid grid-cols-7 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold py-1 text-sm sm:text-base"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 border border-dark-smoke rounded-lg overflow-hidden">
            {calendarDays.map((dayNum, index) => (
              <div
                key={index}
                className={cn(
                  "min-h-24 sm:min-h-32 p-1 relative",
                  dayNum
                    ? getMeetingsForDay(dayNum).length > 0
                      ? "bg-dark-cloud/10"
                      : "bg-white"
                    : "bg-dark-cloud/30"
                )}
              >
                {dayNum && (
                  <>
                    <div className="text-xs sm:text-sm font-semibold mb-1 p-1">
                      {dayNum}
                    </div>
                    <div className="flex flex-col space-y-1 overflow-y-auto max-h-20 sm:max-h-28">
                      {getMeetingsForDay(dayNum).map((meeting) => (
                        <div
                          key={`${meeting.id}-${meeting.time}`}
                          className={cn(
                            "rounded-md px-2 py-0.5 min-h-5 text-xs text-white cursor-pointer truncate transition-all",
                            getTeamColor(meeting.team),
                            selectedMeeting?.meeting.id === meeting.id &&
                              selectedMeeting.day === dayNum &&
                              "ring-2 ring-white ring-offset-1"
                          )}
                          onClick={(e) =>
                            handleMeetingClick(meeting, dayNum, e)
                          }
                        >
                          {meeting.time.split(" ")[0]}: {meeting.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Meeting detail popover (shown on click) */}
          {selectedMeeting && (
            <div
              className="fixed top-1/4 left-1/2 -translate-x-1/2 bg-white p-5 rounded-lg shadow-xl border border-dark-smoke z-[9999] w-80"
              style={{ maxWidth: "90vw" }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">
                  May {selectedMeeting.day} - {selectedMeeting.meeting.time}
                </h3>
                <button
                  className="text-dark-graphite hover:text-dark-black"
                  onClick={closeMeetingDetail}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="w-full bg-dark-cloud rounded-md mb-3 overflow-hidden">
                <img
                  src={getSpaceImage(selectedMeeting.meeting.space)}
                  alt={`${selectedMeeting.meeting.space} preview`}
                  className="w-full h-auto max-h-[200px] object-contain"
                />
              </div>

              <div className="flex items-center mb-2">
                <div
                  className={`w-3 h-3 rounded-full ${getTeamColor(
                    selectedMeeting.meeting.team
                  )} mr-2`}
                ></div>
                <span className="font-medium">
                  {selectedMeeting.meeting.title}
                </span>
              </div>

              <div className="text-sm mb-1 text-dark-graphite">
                <strong>Team:</strong> {selectedMeeting.meeting.team}
              </div>

              <div className="text-sm mb-2 text-dark-graphite">
                <strong>Space:</strong> {selectedMeeting.meeting.space}
              </div>

              <div className="text-sm p-2 bg-dark-cloud/10 rounded-md text-dark-graphite border border-dark-smoke">
                {selectedMeeting.meeting.benefit ||
                  "Connect with your team in the perfect virtual space for this meeting type."}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-dark-smoke pt-6">
          <h3 className="text-xl font-semibold mb-6">
            Team Up! Spaces Utilized
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-dark-smoke rounded-lg p-4 bg-dark-cloud/10">
              <h4 className="font-semibold mb-2">Most Used Spaces</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                  <span>Planning Space</span>
                  <span className="font-medium">47 meetings</span>
                </li>
                <li className="flex justify-between">
                  <span>Auditorium</span>
                  <span className="font-medium">14 meetings</span>
                </li>
                <li className="flex justify-between">
                  <span>Campfire</span>
                  <span className="font-medium">8 meetings</span>
                </li>
              </ul>
            </div>

            <div className="border border-dark-smoke rounded-lg p-4 bg-dark-cloud/10">
              <h4 className="font-semibold mb-2">Top Team Building Spaces</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                  <span>Floor is Lava</span>
                  <span className="font-medium">5 sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>Connect 4</span>
                  <span className="font-medium">4 sessions</span>
                </li>
                <li className="flex justify-between">
                  <span>The Farmyard</span>
                  <span className="font-medium">3 sessions</span>
                </li>
              </ul>
            </div>

            <div className="border border-dark-smoke rounded-lg p-4 bg-dark-cloud/10">
              <h4 className="font-semibold mb-2">Special Events</h4>
              <ul className="mt-2 space-y-2">
                <li>Monthly All-Hands</li>
                <li>End-of-Month Celebration</li>
                <li>4 Weekly Lunch & Learns</li>
                <li>Employee Appreciation Event</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-graphite mb-6">
            Transform how your team connects with purpose-built 3D spaces for
            every meeting type
          </p>
          <Button variant="primary" size="lg">
            Start Your Free 30-Day Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

// Helper function to generate meetings data for the calendar
const generateMeetings = () => {
  const allMeetings = [];

  // Week 1
  // Monday - May 5
  allMeetings.push(
    {
      id: "w1-mon-1",
      day: 5,
      time: "9:00 AM",
      title: "Sprint Planning",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Visualize your sprint tasks and organize them effectively.",
    },
    {
      id: "w1-mon-2",
      day: 5,
      time: "10:30 AM",
      title: "Marketing Content Calendar Review",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Visualize your content timeline and coordinate efforts.",
    },
    {
      id: "w1-mon-3",
      day: 5,
      time: "12:00 PM",
      title: "Lunch & Learn: New Product Features",
      team: "Cross-Department",
      space: "Auditorium",
      benefit: "Present to your entire team with optimal visibility.",
    },
    {
      id: "w1-mon-4",
      day: 5,
      time: "2:00 PM",
      title: "New Hire Orientation",
      team: "HR",
      space: "Custom Branded Space",
      benefit: "Welcome new team members with your branded experience.",
    },
    {
      id: "w1-mon-5",
      day: 5,
      time: "3:30 PM",
      title: "Product Roadmap Discussion",
      team: "Product & Stakeholders",
      space: "Debate Room",
      benefit: "Facilitate focused discussions with visual aids.",
    },
    {
      id: "w1-mon-6",
      day: 5,
      time: "4:30 PM",
      title: "Weekly Team Check-in",
      team: "Customer Success",
      space: "Campfire",
      benefit: "Build rapport in a casual atmosphere.",
    }
  );

  // Tuesday - May 6
  allMeetings.push(
    {
      id: "w1-tue-1",
      day: 6,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w1-tue-2",
      day: 6,
      time: "10:00 AM",
      title: "Creative Brainstorming Session",
      team: "Marketing",
      space: "Campfire",
      benefit: "Inspire creativity in a relaxed setting.",
    },
    {
      id: "w1-tue-3",
      day: 6,
      time: "11:00 AM",
      title: "Recruitment Strategy Meeting",
      team: "HR",
      space: "Planning Space",
      benefit: "Plan your hiring pipeline with visual organization.",
    },
    {
      id: "w1-tue-4",
      day: 6,
      time: "1:00 PM",
      title: "Client Onboarding",
      team: "Sales & Customer Success",
      space: "Custom Branded Space",
      benefit: "Impress clients with your professional virtual space.",
    },
    {
      id: "w1-tue-5",
      day: 6,
      time: "3:00 PM",
      title: "Bug Triage",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Prioritize issues with visual organization tools.",
    },
    {
      id: "w1-tue-6",
      day: 6,
      time: "4:00 PM",
      title: "Social Media Strategy",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Map out your content strategy visually.",
    }
  );

  // Wednesday - May 7
  allMeetings.push(
    {
      id: "w1-wed-1",
      day: 7,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w1-wed-2",
      day: 7,
      time: "10:00 AM",
      title: "Department Heads Sync",
      team: "Leadership",
      space: "Debate Room",
      benefit: "Make critical decisions in a focused environment.",
    },
    {
      id: "w1-wed-3",
      day: 7,
      time: "11:30 AM",
      title: "Design Review",
      team: "Design & Product",
      space: "Planning Space",
      benefit: "Review designs with spatial context.",
    },
    {
      id: "w1-wed-4",
      day: 7,
      time: "1:00 PM",
      title: "Employee Engagement Committee",
      team: "Cross-Department",
      space: "Campfire",
      benefit: "Foster team connection in a relaxed setting.",
    },
    {
      id: "w1-wed-5",
      day: 7,
      time: "2:30 PM",
      title: "Sales Pipeline Review",
      team: "Sales",
      space: "Planning Space",
      benefit: "Visualize your sales funnel for better insights.",
    },
    {
      id: "w1-wed-6",
      day: 7,
      time: "4:00 PM",
      title: "Midweek Team Game Break",
      team: "Marketing",
      space: "Connect 4",
      benefit: "Recharge with fun team activities.",
    }
  );

  // Thursday - May 8
  allMeetings.push(
    {
      id: "w1-thu-1",
      day: 8,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w1-thu-2",
      day: 8,
      time: "10:00 AM",
      title: "Customer Journey Mapping",
      team: "Product & Marketing",
      space: "Planning Space",
      benefit: "Map the customer experience visually.",
    },
    {
      id: "w1-thu-3",
      day: 8,
      time: "11:00 AM",
      title: "Benefits Information Session",
      team: "HR",
      space: "Auditorium",
      benefit: "Present information clearly to the entire team.",
    },
    {
      id: "w1-thu-4",
      day: 8,
      time: "1:00 PM",
      title: "Technical Architecture Review",
      team: "Software Development",
      space: "Debate Room",
      benefit: "Discuss complex technical decisions with clarity.",
    },
    {
      id: "w1-thu-5",
      day: 8,
      time: "2:30 PM",
      title: "Quarterly Goals Check-in",
      team: "Leadership",
      space: "Planning Space",
      benefit: "Track progress on OKRs with visual tools.",
    },
    {
      id: "w1-thu-6",
      day: 8,
      time: "4:00 PM",
      title: "Cross-team Collaboration Session",
      team: "Design & Development",
      space: "Planning Space",
      benefit: "Bridge team gaps with collaborative tools.",
    },
    {
      id: "w1-thu-7",
      day: 8,
      time: "5:00 PM",
      title: "Virtual Happy Hour",
      team: "Company-wide",
      space: "Campfire",
      benefit: "Bond with colleagues in a casual setting.",
    }
  );

  // Friday - May 9
  allMeetings.push(
    {
      id: "w1-fri-1",
      day: 9,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w1-fri-2",
      day: 9,
      time: "10:00 AM",
      title: "Marketing Analytics Review",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Analyze data in a visual, collaborative space.",
    },
    {
      id: "w1-fri-3",
      day: 9,
      time: "11:00 AM",
      title: "Team Building Activity",
      team: "HR",
      space: "Floor is Lava",
      benefit: "Build team chemistry with fun activities.",
    },
    {
      id: "w1-fri-4",
      day: 9,
      time: "1:00 PM",
      title: "Sprint Demo Preparation",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Prepare presentations in a collaborative space.",
    },
    {
      id: "w1-fri-5",
      day: 9,
      time: "2:30 PM",
      title: "Customer Feedback Session",
      team: "Customer Success",
      space: "Campfire",
      benefit: "Discuss feedback in a comfortable setting.",
    },
    {
      id: "w1-fri-6",
      day: 9,
      time: "4:00 PM",
      title: "Week Wrap-up",
      team: "Department Heads",
      space: "Debate Room",
      benefit: "Review the week's progress efficiently.",
    }
  );

  // Week 2
  // Monday - May 12
  allMeetings.push(
    {
      id: "w2-mon-1",
      day: 12,
      time: "9:00 AM",
      title: "Sprint Planning",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Visualize your sprint tasks and organize them effectively.",
    },
    {
      id: "w2-mon-2",
      day: 12,
      time: "10:30 AM",
      title: "Campaign Launch Preparation",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Coordinate campaign elements visually.",
    },
    {
      id: "w2-mon-3",
      day: 12,
      time: "12:00 PM",
      title: "Lunch & Learn: Industry Trends",
      team: "Cross-Department",
      space: "Auditorium",
      benefit: "Present to your entire team with optimal visibility.",
    },
    {
      id: "w2-mon-4",
      day: 12,
      time: "2:00 PM",
      title: "Performance Review Planning",
      team: "HR",
      space: "Planning Space",
      benefit: "Organize evaluations effectively.",
    },
    {
      id: "w2-mon-5",
      day: 12,
      time: "3:30 PM",
      title: "Feature Prioritization",
      team: "Product",
      space: "Planning Space",
      benefit: "Prioritize features with stakeholder input.",
    },
    {
      id: "w2-mon-6",
      day: 12,
      time: "4:30 PM",
      title: "Weekly Team Check-in",
      team: "Customer Success",
      space: "Campfire",
      benefit: "Build rapport in a casual atmosphere.",
    }
  );

  // Tuesday - May 13
  allMeetings.push(
    {
      id: "w2-tue-1",
      day: 13,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w2-tue-2",
      day: 13,
      time: "10:00 AM",
      title: "Content Strategy Meeting",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Plan content with visual timelines.",
    },
    {
      id: "w2-tue-3",
      day: 13,
      time: "11:00 AM",
      title: "Team Skills Assessment",
      team: "HR",
      space: "Planning Space",
      benefit: "Map team capabilities visually.",
    },
    {
      id: "w2-tue-4",
      day: 13,
      time: "1:00 PM",
      title: "Sales Demo Practice",
      team: "Sales",
      space: "Custom Branded Space",
      benefit: "Practice presentations in a professional space.",
    },
    {
      id: "w2-tue-5",
      day: 13,
      time: "2:30 PM",
      title: "Cross-functional Dependencies Review",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Visualize project dependencies.",
    },
    {
      id: "w2-tue-6",
      day: 13,
      time: "4:00 PM",
      title: "New Market Research Presentation",
      team: "Marketing",
      space: "Auditorium",
      benefit: "Present findings to the entire team.",
    }
  );

  // Wednesday - May 14
  allMeetings.push(
    {
      id: "w2-wed-1",
      day: 14,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w2-wed-2",
      day: 14,
      time: "10:00 AM",
      title: "Leadership Strategy Session",
      team: "Executive Team",
      space: "Debate Room",
      benefit: "Make critical decisions in a focused environment.",
    },
    {
      id: "w2-wed-3",
      day: 14,
      time: "11:30 AM",
      title: "UX Review",
      team: "Design & Product",
      space: "Planning Space",
      benefit: "Review user experience with visual context.",
    },
    {
      id: "w2-wed-4",
      day: 14,
      time: "1:00 PM",
      title: "Wellness Wednesday Activity",
      team: "Company-wide",
      space: "Floor is Lava",
      benefit: "Take a break with fun team activities.",
    },
    {
      id: "w2-wed-5",
      day: 14,
      time: "2:30 PM",
      title: "Client Success Story Planning",
      team: "Marketing & Customer Success",
      space: "Planning Space",
      benefit: "Craft compelling stories together.",
    },
    {
      id: "w2-wed-6",
      day: 14,
      time: "4:00 PM",
      title: "Code Review Session",
      team: "Software Development",
      space: "Debate Room",
      benefit: "Review code quality with better visibility.",
    }
  );

  // Thursday - May 15
  allMeetings.push(
    {
      id: "w2-thu-1",
      day: 15,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w2-thu-2",
      day: 15,
      time: "10:00 AM",
      title: "Competitive Analysis Update",
      team: "Product & Marketing",
      space: "Planning Space",
      benefit: "Compare market position visually.",
    },
    {
      id: "w2-thu-3",
      day: 15,
      time: "11:00 AM",
      title: "Diversity & Inclusion Initiative",
      team: "HR",
      space: "Campfire",
      benefit: "Have meaningful conversations in a safe space.",
    },
    {
      id: "w2-thu-4",
      day: 15,
      time: "1:00 PM",
      title: "Technical Debt Review",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Prioritize tech debt with visual tools.",
    },
    {
      id: "w2-thu-5",
      day: 15,
      time: "2:30 PM",
      title: "Quarterly Business Review Prep",
      team: "Leadership",
      space: "Planning Space",
      benefit: "Prepare presentations collaboratively.",
    },
    {
      id: "w2-thu-6",
      day: 15,
      time: "4:00 PM",
      title: "Customer Success Playbook Review",
      team: "Customer Success",
      space: "Planning Space",
      benefit: "Review processes with visual aids.",
    }
  );

  // Friday - May 16
  allMeetings.push(
    {
      id: "w2-fri-1",
      day: 16,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w2-fri-2",
      day: 16,
      time: "10:00 AM",
      title: "Social Media Performance Review",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Analyze social metrics visually.",
    },
    {
      id: "w2-fri-3",
      day: 16,
      time: "11:00 AM",
      title: "New Hire Check-in",
      team: "HR",
      space: "Campfire",
      benefit: "Create a comfortable environment for feedback.",
    },
    {
      id: "w2-fri-4",
      day: 16,
      time: "1:00 PM",
      title: "Sprint Demo",
      team: "Software Development",
      space: "Auditorium",
      benefit: "Showcase your team's accomplishments.",
    },
    {
      id: "w2-fri-5",
      day: 16,
      time: "2:30 PM",
      title: "Sprint Retrospective",
      team: "Software Development",
      space: "Sailboat Retrospective",
      benefit: "Reflect and improve with visual metaphors.",
    },
    {
      id: "w2-fri-6",
      day: 16,
      time: "4:00 PM",
      title: "Team Game Time",
      team: "Cross-Department",
      space: "The Farmyard",
      benefit: "Build cross-team connections with fun activities.",
    }
  );

  // Week 3
  // Monday - May 19
  allMeetings.push(
    {
      id: "w3-mon-1",
      day: 19,
      time: "9:00 AM",
      title: "Sprint Planning",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Visualize your sprint tasks and organize them effectively.",
    },
    {
      id: "w3-mon-2",
      day: 19,
      time: "10:30 AM",
      title: "Email Campaign Review",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Review email performance with visual data.",
    },
    {
      id: "w3-mon-3",
      day: 19,
      time: "12:00 PM",
      title: "Lunch & Learn: Security Best Practices",
      team: "Cross-Department",
      space: "Auditorium",
      benefit: "Present to your entire team with optimal visibility.",
    },
    {
      id: "w3-mon-4",
      day: 19,
      time: "2:00 PM",
      title: "Talent Acquisition Strategy",
      team: "HR",
      space: "Planning Space",
      benefit: "Plan recruitment tactics visually.",
    },
    {
      id: "w3-mon-5",
      day: 19,
      time: "3:30 PM",
      title: "Product Feedback Integration",
      team: "Product",
      space: "Planning Space",
      benefit: "Organize customer feedback effectively.",
    },
    {
      id: "w3-mon-6",
      day: 19,
      time: "4:30 PM",
      title: "Weekly Team Check-in",
      team: "Customer Success",
      space: "Campfire",
      benefit: "Build rapport in a casual atmosphere.",
    }
  );

  // Tuesday - May 20
  allMeetings.push(
    {
      id: "w3-tue-1",
      day: 20,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w3-tue-2",
      day: 20,
      time: "10:00 AM",
      title: "Brand Consistency Workshop",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Align visual branding elements.",
    },
    {
      id: "w3-tue-3",
      day: 20,
      time: "11:00 AM",
      title: "Benefits Package Review",
      team: "HR",
      space: "Planning Space",
      benefit: "Organize benefits information clearly.",
    },
    {
      id: "w3-tue-4",
      day: 20,
      time: "1:00 PM",
      title: "Key Account Strategy",
      team: "Sales",
      space: "Planning Space",
      benefit: "Plan account management visually.",
    },
    {
      id: "w3-tue-5",
      day: 20,
      time: "2:30 PM",
      title: "API Documentation Review",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Review technical documentation together.",
    },
    {
      id: "w3-tue-6",
      day: 20,
      time: "4:00 PM",
      title: "Department Team Building",
      team: "Marketing",
      space: "Connect 4",
      benefit: "Strengthen team bonds with fun activities.",
    }
  );

  // Wednesday - May 21
  allMeetings.push(
    {
      id: "w3-wed-1",
      day: 21,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w3-wed-2",
      day: 21,
      time: "10:00 AM",
      title: "Mid-Quarter Review",
      team: "Leadership",
      space: "Planning Space",
      benefit: "Review progress with visual data.",
    },
    {
      id: "w3-wed-3",
      day: 21,
      time: "11:30 AM",
      title: "Design System Update",
      team: "Design",
      space: "Planning Space",
      benefit: "Align on design patterns visually.",
    },
    {
      id: "w3-wed-4",
      day: 21,
      time: "1:00 PM",
      title: "Cross-Department Mixer",
      team: "Company-wide",
      space: "This or That",
      benefit: "Build connections across teams.",
    },
    {
      id: "w3-wed-5",
      day: 21,
      time: "2:30 PM",
      title: "Sales Enablement Session",
      team: "Sales & Marketing",
      space: "Planning Space",
      benefit: "Equip sales team with visual tools.",
    },
    {
      id: "w3-wed-6",
      day: 21,
      time: "4:00 PM",
      title: "Technical Planning",
      team: "Software Development",
      space: "Debate Room",
      benefit: "Plan architecture with visual context.",
    }
  );

  // Thursday - May 22
  allMeetings.push(
    {
      id: "w3-thu-1",
      day: 22,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w3-thu-2",
      day: 22,
      time: "10:00 AM",
      title: "Product Marketing Alignment",
      team: "Product & Marketing",
      space: "Planning Space",
      benefit: "Coordinate messaging with visual tools.",
    },
    {
      id: "w3-thu-3",
      day: 22,
      time: "11:00 AM",
      title: "Team Performance Review",
      team: "HR",
      space: "Planning Space",
      benefit: "Assess team metrics visually.",
    },
    {
      id: "w3-thu-4",
      day: 22,
      time: "1:00 PM",
      title: "Security Review",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Prioritize security tasks visually.",
    },
    {
      id: "w3-thu-5",
      day: 22,
      time: "2:30 PM",
      title: "Budget Review",
      team: "Department Heads",
      space: "Planning Space",
      benefit: "Analyze financials with visual tools.",
    },
    {
      id: "w3-thu-6",
      day: 22,
      time: "4:00 PM",
      title: "Customer Journey Optimization",
      team: "Customer Success & Marketing",
      space: "Planning Space",
      benefit: "Improve customer experience together.",
    }
  );

  // Friday - May 23
  allMeetings.push(
    {
      id: "w3-fri-1",
      day: 23,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w3-fri-2",
      day: 23,
      time: "10:00 AM",
      title: "Content Calendar Planning",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Plan content visually on a timeline.",
    },
    {
      id: "w3-fri-3",
      day: 23,
      time: "11:00 AM",
      title: "Employee Appreciation Event",
      team: "Company-wide",
      space: "Custom Branded Space",
      benefit: "Celebrate team members in a branded environment.",
    },
    {
      id: "w3-fri-4",
      day: 23,
      time: "1:00 PM",
      title: "Feature Development Status",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Update stakeholders with visual progress.",
    },
    {
      id: "w3-fri-5",
      day: 23,
      time: "2:30 PM",
      title: "Customer Success Stories",
      team: "Customer Success",
      space: "Campfire",
      benefit: "Share wins in a comfortable setting.",
    },
    {
      id: "w3-fri-6",
      day: 23,
      time: "4:00 PM",
      title: "Casual Friday Social",
      team: "Company-wide",
      space: "Floor is Lava",
      benefit: "End the week with fun team activities.",
    }
  );

  // Week 4
  // Monday - May 26
  allMeetings.push(
    {
      id: "w4-mon-1",
      day: 26,
      time: "9:00 AM",
      title: "Sprint Planning",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Visualize your sprint tasks and organize them effectively.",
    },
    {
      id: "w4-mon-2",
      day: 26,
      time: "10:30 AM",
      title: "Monthly Marketing Results",
      team: "Marketing",
      space: "Auditorium",
      benefit: "Present results with maximum engagement.",
    },
    {
      id: "w4-mon-3",
      day: 26,
      time: "12:00 PM",
      title: "Lunch & Learn: Customer Success Stories",
      team: "Cross-Department",
      space: "Auditorium",
      benefit: "Share success stories with the whole team.",
    },
    {
      id: "w4-mon-4",
      day: 26,
      time: "2:00 PM",
      title: "Onboarding Process Review",
      team: "HR",
      space: "Planning Space",
      benefit: "Improve onboarding with visual process maps.",
    },
    {
      id: "w4-mon-5",
      day: 26,
      time: "3:30 PM",
      title: "Roadmap Adjustment Meeting",
      team: "Product",
      space: "Planning Space",
      benefit: "Update roadmap with visual planning tools.",
    },
    {
      id: "w4-mon-6",
      day: 26,
      time: "4:30 PM",
      title: "Weekly Team Check-in",
      team: "Customer Success",
      space: "Campfire",
      benefit: "Build rapport in a casual atmosphere.",
    }
  );

  // Tuesday - May 27
  allMeetings.push(
    {
      id: "w4-tue-1",
      day: 27,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w4-tue-2",
      day: 27,
      time: "10:00 AM",
      title: "Campaign Performance Review",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Analyze campaign metrics visually.",
    },
    {
      id: "w4-tue-3",
      day: 27,
      time: "11:00 AM",
      title: "Team Development Planning",
      team: "HR",
      space: "Planning Space",
      benefit: "Plan skill development visually.",
    },
    {
      id: "w4-tue-4",
      day: 27,
      time: "1:00 PM",
      title: "Sales Process Optimization",
      team: "Sales",
      space: "Planning Space",
      benefit: "Improve sales workflow with visual mapping.",
    },
    {
      id: "w4-tue-5",
      day: 27,
      time: "2:30 PM",
      title: "Code Quality Session",
      team: "Software Development",
      space: "Debate Room",
      benefit: "Improve code standards collaboratively.",
    },
    {
      id: "w4-tue-6",
      day: 27,
      time: "4:00 PM",
      title: "SEO Strategy Review",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Visualize SEO performance and strategy.",
    }
  );

  // Wednesday - May 28
  allMeetings.push(
    {
      id: "w4-wed-1",
      day: 28,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w4-wed-2",
      day: 28,
      time: "10:00 AM",
      title: "Executive Strategy Session",
      team: "Leadership",
      space: "Debate Room",
      benefit: "Make critical decisions in a focused environment.",
    },
    {
      id: "w4-wed-3",
      day: 28,
      time: "11:30 AM",
      title: "Product Design Review",
      team: "Design & Product",
      space: "Planning Space",
      benefit: "Review designs with spatial context.",
    },
    {
      id: "w4-wed-4",
      day: 28,
      time: "1:00 PM",
      title: "Wellness Wednesday",
      team: "Company-wide",
      space: "The Farmyard",
      benefit: "Take a break and reset with fun activities.",
    },
    {
      id: "w4-wed-5",
      day: 28,
      time: "2:30 PM",
      title: "Customer Retention Strategies",
      team: "Customer Success",
      space: "Planning Space",
      benefit: "Plan retention tactics visually.",
    },
    {
      id: "w4-wed-6",
      day: 28,
      time: "4:00 PM",
      title: "Technical Documentation Review",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Improve documentation collaboratively.",
    }
  );

  // Thursday - May 29
  allMeetings.push(
    {
      id: "w4-thu-1",
      day: 29,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w4-thu-2",
      day: 29,
      time: "10:00 AM",
      title: "Cross-functional Project Status",
      team: "Multiple Departments",
      space: "Planning Space",
      benefit: "Coordinate across teams with visual tools.",
    },
    {
      id: "w4-thu-3",
      day: 29,
      time: "11:00 AM",
      title: "Culture Committee Meeting",
      team: "HR",
      space: "Campfire",
      benefit: "Discuss culture in a relaxed environment.",
    },
    {
      id: "w4-thu-4",
      day: 29,
      time: "1:00 PM",
      title: "QA Strategy Session",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Plan testing approach visually.",
    },
    {
      id: "w4-thu-5",
      day: 29,
      time: "2:30 PM",
      title: "Month-end Review Preparation",
      team: "Leadership",
      space: "Planning Space",
      benefit: "Prepare reports with visual organization.",
    },
    {
      id: "w4-thu-6",
      day: 29,
      time: "4:00 PM",
      title: "Department Team Building",
      team: "Customer Success",
      space: "Connect 4",
      benefit: "Build team chemistry with fun activities.",
    }
  );

  // Friday - May 30
  allMeetings.push(
    {
      id: "w4-fri-1",
      day: 30,
      time: "9:00 AM",
      title: "Daily Stand-up",
      team: "Software Development",
      space: "Planning Space",
      benefit: "Quick daily alignment in an engaging environment.",
    },
    {
      id: "w4-fri-2",
      day: 30,
      time: "10:00 AM",
      title: "Monthly Marketing Planning",
      team: "Marketing",
      space: "Planning Space",
      benefit: "Plan next month with visual tools.",
    },
    {
      id: "w4-fri-3",
      day: 30,
      time: "11:00 AM",
      title: "All-Hands Meeting",
      team: "Company-wide",
      space: "Auditorium",
      benefit: "Gather the entire company with perfect visibility.",
    },
    {
      id: "w4-fri-4",
      day: 30,
      time: "1:00 PM",
      title: "Sprint Demo",
      team: "Software Development",
      space: "Auditorium",
      benefit: "Showcase your team's accomplishments.",
    },
    {
      id: "w4-fri-5",
      day: 30,
      time: "2:30 PM",
      title: "Sprint Retrospective",
      team: "Software Development",
      space: "Sailboat Retrospective",
      benefit: "Reflect and improve with visual metaphors.",
    },
    {
      id: "w4-fri-6",
      day: 30,
      time: "4:00 PM",
      title: "End-of-Month Celebration",
      team: "Company-wide",
      space: "Custom Branded Space",
      benefit: "Celebrate achievements in your branded environment.",
    }
  );

  return allMeetings;
};

// Icon components
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export default TeamUpMonth;
