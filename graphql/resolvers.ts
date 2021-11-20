import { resolversProject } from "../models/projects/resolvers";
import { resolversUser } from "../models/user/resolvers";
import { resolversAdvance } from "../models/advance/resolvers";

export const resolvers = [resolversProject, resolversUser, resolversAdvance];