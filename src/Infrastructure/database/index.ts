import { Connection, getConnectionOptions, createConnection } from 'typeorm';

import { AppError } from '@shared/error/AppError';

type connectionName = 'default' | 'test';

const ormCreateConnection = async (
  connectionName: connectionName,
): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  switch (connectionName) {
    case 'default':
      // eslint-disable-next-line no-return-await
      return await createConnection(defaultOptions);
    case 'test':
      return createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: ['src/Infrastructure/database/entities/*{.ts,.js}'],
        migrations: ['src/Infrastructure/database/migrations/*{.ts,.js}'],
        dropSchema: true,
        synchronize: true,
        logging: false,
      });
    default:
      throw new AppError('Connection name is not found', 500);
  }
};

export { ormCreateConnection };
