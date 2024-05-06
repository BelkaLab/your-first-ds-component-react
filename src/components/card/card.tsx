import classNames from "classnames";
import { forwardRef } from "react";
import { CardProps } from "./types";
import { cardStyles } from "./styles";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(cardStyles({}), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

const CardButton = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
);

CardButton.displayName = "CardButton";

export { Card, CardHeader, CardContent, CardButton };