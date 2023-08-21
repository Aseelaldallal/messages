
import { messagesRepository } from "./messages.repository";

export class MessagesService {
  messagesRepo: messagesRepository;

  constructor() {
    // The service is creating its own dependencies
    // Messages Repository is a dependency of this service
    // I.e, the service cannot work correctly if the
    // repository is not present. This is something WE DO NOT
    // DO IN NEST
    // DONT DO THIS IN NEST
    // WE DONT HAVE ANY CLASS CREATING ITS OWN DEPENDENCIES IN
    // NEST
    this.messagesRepo = new messagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

}