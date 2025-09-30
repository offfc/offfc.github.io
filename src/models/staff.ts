import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import {
  faBorderTopLeft,
  faChessKing,
  faCode, faCompactDisc, faCompassDrafting, faEye, faHeadset,
  faListCheck, faMagnifyingGlass, faPalette,
  faPenRuler,
  faQuestionCircle, faSatellite, faVial,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Represents a tournament staff.
 */
export class Staff {
  Name: string;
  Roles: StaffRole[];
  OsuId?: number | null = null;
  ProfileLink?: string | null = null;

  constructor(name: string, roles: StaffRole[], osuId?: number, profileLink?: string) {
    this.Name = name;
    this.Roles = roles;
    this.OsuId = osuId;

    if (profileLink === null) {
      if (osuId !== null)
        this.ProfileLink = `https://osu.ppy.sh/users/${osuId}`;
    } else {
      this.ProfileLink = profileLink;
    }
  }
}

/**
 * Utility methods for the Staff class.
 */
export class StaffUtils {
  static GetRoleColour(role: StaffRole): string {
    switch (role) {
      case StaffRole.Host:
        return "#ffc300";

      case StaffRole.RoleMaker:
      case StaffRole.Developer:
      case StaffRole.GraphicDesigner:
      case StaffRole.SpreadsheetDesigner:
        return "#2a82e4";

      case StaffRole.MappoolSelector:
      case StaffRole.Playtester:
        return "#00baad";

      case StaffRole.Referee:
      case StaffRole.Streamer:
      case StaffRole.Commentator:
        return "#7948ea";

      case StaffRole.CustomMapper:
      case StaffRole.Musician:
      case StaffRole.Illustrator:
        return "#e33c64";

      default:
        return "#ffffff";
    }
  }

  static GetRoleIconDefinition(role: StaffRole): IconDefinition {
    switch (role) {
      case StaffRole.Host:
        return faChessKing;
      case StaffRole.RoleMaker:
        return faListCheck;
      case StaffRole.Developer:
        return faCode;
      case StaffRole.GraphicDesigner:
        return faPenRuler;
      case StaffRole.SpreadsheetDesigner:
        return faBorderTopLeft;
      case StaffRole.MappoolSelector:
        return faMagnifyingGlass;
      case StaffRole.Playtester:
        return faVial;
      case StaffRole.Referee:
        return faEye;
      case StaffRole.Streamer:
        return faSatellite;
      case StaffRole.Commentator:
        return faHeadset;
      case StaffRole.CustomMapper:
        return faCompassDrafting;
      case StaffRole.Musician:
        return faCompactDisc;
      case StaffRole.Illustrator:
        return faPalette;
      default:
        return faQuestionCircle;
    }
  }
}

/**
 * Possible roles of a staff.
 */
export enum StaffRole {
  Host,
  RoleMaker,
  Developer,
  GraphicDesigner,
  SpreadsheetDesigner,
  MappoolSelector,
  Playtester,
  Referee,
  Streamer,
  Commentator,
  CustomMapper,
  Musician,
  Illustrator,
}
