export enum Status {
  Active = 'active',
  Inactive = 'inactive',
}

export abstract class Entity {
  protected id?: string;
  protected isDeleted: boolean;
  protected created_at: Date;
  protected updated_at: Date;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getISDeleted(): boolean {
    return this.isDeleted;
  }

  public getCreatedAt(): Date {
    return this.created_at;
  }

  public setCreatedAt(createdAt: Date): void {
    this.created_at = createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updated_at;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updated_at = updatedAt;
  }

  public abstract validator(): boolean;
}
