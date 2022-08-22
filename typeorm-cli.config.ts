import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'oracle',
  host: '192.168.100.200',
  port: 1521,
  serviceName: 'WINT19TT',
  username: 'LIVIA',
  password: 'LIVIA',
  synchronize: false,
});
