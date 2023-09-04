import { User } from 'src/entities/user.entity';
import { Properties } from 'src/entities/properties.entity';
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = 
{
    type: 'sqlite',
    database: 'PropertiesDB.sqlite',
    entities: [User, Properties],
    migrations: ['dist/db/migrations/*.js'],
    migrationsTableName: "migrations",
    
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;