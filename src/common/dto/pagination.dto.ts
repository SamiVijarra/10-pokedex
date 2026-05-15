import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginatedDto {
  @IsOptional()
  @IsPositive()
  @Min(1)
  offset?: number;
  @IsOptional()
  @IsPositive()
  limit?: number;
}
