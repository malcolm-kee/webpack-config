import cx from 'classnames';
import * as React from 'react';
import styles from './button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function ButtonComp(
  { variant, className, ...props },
  ref
) {
  return (
    <button
      className={cx(styles.btn, variant && styles[variant], className)}
      {...props}
      ref={ref}
    />
  );
});
