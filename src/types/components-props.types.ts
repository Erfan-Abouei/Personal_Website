import type React from "react";

export type SEOHeadProps = {
    title: string;
    description?: string
}

export type UsernameBoxProps = {
    username: string,
    isShowCircle: boolean
}

export type LogoTypeProp = {
    customClass: string
}

export type MainButtonProps = {
    children: React.ReactNode
    withBorder: boolean
    onClick?: () => void
}

export type AboutMeModalProps = {
    isShow: boolean
    onShowModal: () => void
}

export type HeaderProp = {
    onOpenModal: () => void
}

export type OverlayProp = {
    isShow: boolean
}