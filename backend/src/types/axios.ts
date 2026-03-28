export interface AuthRequest extends Request {
  user: { id: string };
  params: { propertyId: string };
}
