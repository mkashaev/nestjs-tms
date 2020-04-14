// You have to create typeorm.config.ts file and paste config there

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = { 
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'nameofdb',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
}