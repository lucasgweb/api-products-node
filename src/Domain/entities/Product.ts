import { AppError } from '@shared/error/AppError';

import { ProductValidator } from '../validators/ProductValidator';
import { Entity } from './Entity';

export enum Visibility {
  Public = 'public',
  Private = 'private',
}

export class Product extends Entity {
  private visibility: string;
  private name: string;
  private imageUrl: string;
  private processPrice: number;
  private description: string;
  private calcType: string;
  private shortDescription: string;

  public initialize(
    name: string,
    imageUrl: string,
    processPrice: number,
    description: string,
    calcType: string,
    shortDescription: string,
    id?: string,
    visibility?: string,
    isDeleted?: boolean,
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.processPrice = processPrice;
    this.description = description;
    this.calcType = calcType;
    this.shortDescription = shortDescription;
    this.id = id;
    this.visibility = visibility;
    this.isDeleted = isDeleted;

    this.validator();
  }

  public setPublic(): void {
    this.visibility = Visibility.Public;
  }

  public setPrivate(): void {
    this.visibility = Visibility.Private;
  }

  public getVisibility(): string {
    return this.visibility;
  }

  public setName(name: string): void {
    this.name = name;
    this.validator();
  }

  public getName(): string {
    return this.name;
  }

  public setProcessPrice(processPrice: number): void {
    this.processPrice = processPrice;
    this.validator();
  }

  public getProcessPrice(): number {
    return this.processPrice;
  }

  public setDescription(description: string): void {
    this.description = description;
    this.validator();
  }

  public getDescription(): string {
    return this.description;
  }

  public setShortDescription(shortDescription: string): void {
    this.shortDescription = shortDescription;
    this.validator();
  }

  public getShortDescription(): string {
    return this.shortDescription;
  }
  public setCalcType(calcType: string): void {
    this.calcType = calcType;
    this.validator();
  }

  public getCalcType(): string {
    return this.calcType;
  }
  public setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
    this.validator();
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }

  public validator(): boolean {
    const validator = ProductValidator.getInstance();
    const validation = validator.validate(this);

    if (validation) {
      throw new AppError(`${validation}`);
    }

    return true;
  }
}
