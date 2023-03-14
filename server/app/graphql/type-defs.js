import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Get all profiles"
    profiles: [Profile!]!
    "Get a profile by id"
    profile(id: ID!): Profile
  }

  type Mutation {
    "Create a new profile"
    createProfile(name: String): Profile!
    "Add a skill to a profile"
    addSkill2Profile(id: ID!, skill: String!): Profile!
    "Remove a skill from a profile"
    removeSkillFromProfile(id: ID!, skill: String!): Profile!
    "Delete a profile"
    deleteProfile(id: ID!): Profile!
  }

  # This is basically a duplicate of the Mongoose schema
  type Profile {
    id: ID!
    "Full name of the person 🧑‍🦰"
    name: String!
    "A list of the person's programming skills 🧑‍💻"
    skills: [String]!
  }
`;
