import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListNotesByUserUserCase } from './ListNotesByUserUserCase';

export class ListNotesByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const listNotesByUserUserCase = container.resolve(ListNotesByUserUserCase);

    const notes = await listNotesByUserUserCase.execute(userId);

    return response.json(notes);
  }
}
