import jwt from "jsonwebtoken";

export function generateToken(payload) {
  return new Promise((res, eje) => {
    jwt.sign(payload, "secret key", { expiresIn: "1hr" }, (error, token) => {
      if (error) {
        eje( {error} );
      } else {
        res( {token} );
      }
    });
  });
}


export function validateToken(token) {
  return new Promise((res, eje) => {
    jwt.verify(token, "secret key",  (error, decodificado) => {
      if (error) {
        eje( error );
      } else {
        res( decodificado );
      }
    });
  });
}



