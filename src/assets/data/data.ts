import homeIcon from "../images/home.svg";
import userIcon from "../images/user.svg";
import scheduleIcon from "../images/calender.svg";
import communicationIcon from "../images/communication.svg";
import filesIcon from "../images/file.svg";
import notebookIcon from "../images/notebook.svg";
import favoriteIcon from "../images/heart.svg";
import expandIcon from "../images/expand.svg";

import whilstIcon from "../images/whilst.svg";
import userCloseIcon from "../images/user-close.svg";
import userVoiceIcon from "../images/user-voice.svg";
import mailIcon from "../images/mail.svg";

const headerData = [
  {
    title: "Whilst",
    icon: whilstIcon,
  },
  {
    title: "User",
    icon: userCloseIcon,
  },
  {
    title: "Voice Mail",
    icon: userVoiceIcon,
  },
  {
    title: "Message",
    icon: mailIcon,
  },
];

const sidebarData = [
  {
    title: "Home",
    icon: homeIcon,
    route: "/",
  },
  {
    title: "User",
    icon: userIcon,
    route: "/user",
  },
  {
    title: "Schedule",
    icon: scheduleIcon,
    route: "/schedule",
  },
  {
    title: "Communication",
    icon: communicationIcon,
    route: "/communication",
  },
  {
    title: "Files",
    icon: filesIcon,
    route: "/files",
  },
  {
    title: "Notebook",
    icon: notebookIcon,
    route: "/notebook",
  },
  {
    title: "Favorite",
    icon: favoriteIcon,
    route: "/favorite",
  },
  {
    icon: expandIcon,
    route: "/settings",
  },
];

const candidates = [
  {
    avatar: "https://ui-avatars.com/api/?name=Aaliyah+Sanderson",
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    school: "Bachelor - Cambridge University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=John+Doe",
    name: "John Doe",
    location: "Bostom, USA",
    school: "Bachelor - MIT (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Thomas+Matt",
    name: "Thomas Matt",
    location: "Edinburgh, UK",
    school: "Bachelor - Harvard University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Kamilia+Smith",
    name: "Kamilia Smith",
    location: "London, UK",
    school: "Bachelor - Boston University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Roy+Jade",
    name: "Roy Jade",
    location: "Cambridge,  UK",
    school: "Bachelor - Yale (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Ahmed+Salman",
    name: "Ahmed Salman",
    location: "New York, USA",
    school: "Bachelor - Cambridge University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Robert+White",
    name: "Robert White",
    location: "Austin, TX",
    school: "University of Texas at Austin (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Linda+Martinez",
    name: "Linda Martinez",
    location: "Miami, FL",
    school: "Florida International University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=William+Johnson",
    name: "William Johnson",
    location: "Denver, CO",
    school: "Bachelor - University of Denver (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Jennifer+Kim",
    name: "Jennifer Kim",
    location: "Atlanta, GA",
    school: "Bachelor - Georgia Institute of Technology (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Richard+Richard",
    name: "Richard Baker",
    location: "Philadelphia, PA",
    school: "Bachelor - University of Pennsylvania (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Karen+Lewis",
    name: "Karen Lewis",
    location: "San Diego, CA",
    school: "Bachelor - San Diego State University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Thomas+Green",
    name: "Thomas Green",
    location: "Houston, TX",
    school: "Bachelor - Rice University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Amanda+Clark",
    name: "Amanda Clark",
    location: "Portland, OR",
    school: "Bachelor - University of Oregon (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=George+Wright",
    name: "George Wright",
    location: "Phoenix, AZ",
    school: "Bachelor - Arizona State University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Mary+Adams",
    name: "Mary Adams",
    location: "Dallas, TX",
    school: "Bachelor - Southern Methodist University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Daniel+Turner",
    name: "Daniel Turner",
    location: "Nashville, TN",
    school: "Bachelor - Vanderbilt University (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Olivia+Hall",
    name: "Olivia Hall",
    location: "Minneapolis, MN",
    school: "Bachelor - University of Minnesota",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
  {
    avatar: "https://ui-avatars.com/api/?name=Kevin+Harris",
    name: "Kevin Harris",
    location: "Detroit, MI",
    school: "Bachelor - Wayne State University",
    hashtags: ["#top_candidate", "#top_candidate"],
    categoryTags: ["New York", "Marketing", "London"],
  },
];

const opportunities = [
  {
    id: 1,
    title: "Applied",
    tags: [1745],
  },
  {
    id: 2,
    title: "Shortlisted",
    tags: [453],
  },
  {
    id: 3,
    title: "Technical Interview",
    tags: [123],
  },
  {
    id: 4,
    title: "Opportunity Browsing",
    tags: [243],
  },
  {
    id: 5,
    title: "Video Interview I",
    tags: [25],
  },
  {
    id: 6,
    title: "Video Interview II",
    tags: [25],
  },
  {
    id: 7,
    title: "Video Interview III",
    tags: [25],
  },
  {
    id: 8,
    title: "Offer",
    tags: [25],
  },
  {
    id: 9,
    title: "Withdrawn",
    tags: [24],
  },
];

export { headerData, sidebarData, candidates, opportunities };
