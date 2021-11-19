import { resolversProject } from "../models/project/resolvers";
import { resolversUser } from "../models/user/resolvers";
import { resolversAdvance } from "../models/advance/resolvers";

export const resolvers = [resolversUser, resolversProject, resolversAdvance];