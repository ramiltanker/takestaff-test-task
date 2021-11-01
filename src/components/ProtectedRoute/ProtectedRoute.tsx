import { FunctionComponent, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "../../redux/typedHooks";

interface IProtectedRouteProps {
  children?: ReactNode;
  path: string;
  exact: boolean;
}

type FC<P = IProtectedRouteProps> = FunctionComponent<P>;

export const ProtectedRoute: FC<IProtectedRouteProps> = ({
  children,
  ...rest
}) => {
  const { isLogged } = useSelector((store) => store.auth);

  if (!isLogged) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
