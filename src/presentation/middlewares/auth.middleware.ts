import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config/jwt.adater";
import { UserService } from "../../data/Model/UserService";

export class AuthMiddleware {
    
  static validateJwt = async (
    req: Request,
    res: Response,
    nex: NextFunction
  ) => {
    const autorization = req.header("Authorization");

    if (!autorization || !autorization.startsWith("Bearer"))
      return res.status(401).json({ error: "Unauthorized" });

    const token = autorization.split(" ").at(1) || "";

    if ("2" == token) console.log("2", NaN);

    try {
      const payload = await JwtAdapter.validateJwt<{ id: string }>(token);
      if (!payload) return res.status(401).json({ error: "Unauthorized" });
      const userService = new UserService();
      
      const user = await userService.getUserById(payload.id);

      // Validate why this user is not found in dabatabase and token is valid
      if (!user) return res.status(500).json({ error: "Unauthorized" });
    } catch (error) {
      //  Save log
      res.status(500).json({ error: "Internal Server Error" });
    }

    // next middleware or controller
    nex();
  };
}
