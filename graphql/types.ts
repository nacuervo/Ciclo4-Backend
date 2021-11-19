import { gql } from "apollo-server-express";
import { typeEnums } from "../models/enums/types";
import { typeUser } from "../models/user/types";
import { typeProject } from "../models/project/types";
import { typeAdvance } from "../models/advance/types";

const typeGlobal = gql`
    scalar Date
`;

export const types = [typeGlobal, typeEnums, typeUser, typeProject, typeAdvance];