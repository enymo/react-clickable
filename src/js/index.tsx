import classNames from "classnames";
import { CSSProperties } from "react";

export interface ClickableProps {
    className?: string,
    style?: CSSProperties,
    to?: string,
    onClick?: (e: React.MouseEvent) => void | Promise<void>,
    linkType?: "normal" | "new-tab",
    disabled?: boolean,
    submit?: boolean,
    children: React.ReactNode
}

export function Clickable({
    className,
    style,
    to,
    onClick,
    linkType = "normal",
    disabled = false,
    submit = false,
    children
}: ClickableProps) {
    if (to && !disabled) {
        return (
            <a
                href={to}
                onClick={onClick}
                className={className}
                style={style}
                {...(linkType === "new-tab" ? {
                    target: "_blank",
                    referrerPolicy: "no-referrer"
                } : {})}
            >{children}</a>
        )
    }
    else if (onClick) {
        return (
            <button
                onClick={onClick}
                className={classNames(className, {disabled})}
                disabled={disabled}
                style={style}
                type={submit ? "submit" : "button"}
            >{children}</button>
        )
    }
    else {
        return (
            <div
                className={classNames(className, {disabled})}
                style={style}
            >{children}</div>
        )
    }
}