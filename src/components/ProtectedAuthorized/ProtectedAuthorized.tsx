import { FunctionComponent, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

// Types
import { useSelector } from "../../redux/typedHooks";
// Types

interface IProtectedAuthorizedProps {
  children?: ReactNode;
  path: string;
}

type FC<P = {}> = FunctionComponent<P>;
const ProtectedAuthorized: FC<IProtectedAuthorizedProps> = ({
  children,
  ...rest
}) => {
  const { user } = useSelector((state) => state.auth);

  const isUser = user && user.email !== "" && user.name !== "";

  return (
    <Route
      {...rest}
      render={() => (!isUser ? children : <Redirect to="/contacts" />)}
    />
  );
};

export default ProtectedAuthorized;
