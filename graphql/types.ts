import { gql } from "apollo-server-express";
import { typeEnums } from "../models/enums/types";
import { typeUser } from "../models/user/types";
import { typeProject } from "../models/projects/types";
import { typeAdvance } from "../models/advance/types";

const typeGlobals = gql`

    scalar Date
`;

export const types = [typeGlobals, typeEnums, typeUser, typeProject, typeAdvance];