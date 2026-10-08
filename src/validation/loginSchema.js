import from  from 'react';
import * as Yup from 'yup';




   const loginScheme = Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    })

    export default loginScheme;