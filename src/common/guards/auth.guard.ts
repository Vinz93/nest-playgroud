import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>{
    // const request = context.switchToHttp().getRequest();
    console.log('role guard executed');
    return true;
  }
}
