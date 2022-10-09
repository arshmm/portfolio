interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "refrence";
  };
}

export interface PageInfo extends sanityBody {
  _type: "pageInfo";
  address: string;
  backGroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phone: string;
  profilePic: Image;
  socials: Social[];
  fileUrl: string;
}

export interface Technology extends sanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends sanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends sanityBody {
  _type: "experience";
  company: string;
  comapanyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingThere: boolean;
  jobTitle: string;
  points: string[];
  technilogies: Technology[];
}

export interface Project extends sanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technology: Technology[];
}

export interface Social extends sanityBody {
  _type: "social";
  Name: string;
  url: string;
}
