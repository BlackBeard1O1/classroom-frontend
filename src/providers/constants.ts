import { Subject } from "../types";

//export const API_URL = "https://api.fake-rest.refine.dev";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamentals of programming and computer systems, covering basic algorithms, data structures, and problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Study of vectors, matrices, systems of linear equations, vector spaces, and linear transformations with applications in engineering and science.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS301",
    name: "Quantum Mechanics I",
    department: "Physics",
    description: "An introduction to the mathematical formalism and physical interpretation of quantum mechanics, including Schrodinger equation and wave-particle duality.",
    createdAt: new Date().toISOString(),
  },
];
