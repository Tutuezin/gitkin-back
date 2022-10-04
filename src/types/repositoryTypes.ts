import { Repository } from "@prisma/client";

export type IRepositoryData = Omit<Repository, "id" | "userId" | "createdAt">;
