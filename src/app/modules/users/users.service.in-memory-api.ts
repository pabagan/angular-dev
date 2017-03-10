import { InMemoryDbService } from 'angular-in-memory-web-api';
export class UsersInMemoryDbService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        _id: "58c1c43de102e22c6115460b",
        email: "admin@gmail.com",
        name: "admin",
        password: "pass",
        phone: "+34670348770",
        role: "admin",
        remember: true
      },
      {
        _id: "58aac805d5e4d31c040b5991",
        email: "user@gmail.com",
        name: "user",
        password: "pass",
        phone: "+34670588330",
        role: "user",
        remember: true
      },
    ];
    return {users};
  }
}