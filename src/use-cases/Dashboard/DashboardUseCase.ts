import { Dashboard } from "../../entities/Dashboard";
import { DashboardRepository } from "../../repositories/DashboardRepository";

export class DashboardUseCase {
  constructor(
    private dashboardRepository: DashboardRepository
  ) { }

  async execute(): Promise<Dashboard> {
    return await this.dashboardRepository.get();
  }
}
