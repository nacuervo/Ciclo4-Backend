import { resolversProject } from "../models/projects/resolvers.js";
import { resolversUser } from "../models/user/resolvers.js";
import { resolversAdvance } from "../models/advance/resolvers.js";
import { resolversInscription } from "../models/inscription/resolvers.js";

export const resolvers = [resolversProject, resolversUser, resolversAdvance, resolversInscription];