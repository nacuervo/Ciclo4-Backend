import { gql } from "apollo-server-express";
import { typeEnums } from "../models/enums/types.js";
import { typeUser } from "../models/user/types.js";
import { typeProject } from "../models/projects/types.js";
import { typeAdvance } from "../models/advance/types.js";
import { typeInscription } from "../models/inscription/types.js";

const typeGlobals = gql`

    scalar Date
`;

export const types = [typeGlobals, typeEnums, typeUser, typeProject, typeAdvance, typeInscription];