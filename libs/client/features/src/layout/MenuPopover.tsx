import { signOut } from 'next-auth/react'
import { Menu } from '@maybe-finance/design-system'
import type { ComponentProps } from 'react'
import {
    RiSettings3Line as SettingsIcon,
    RiShutDownLine as LogoutIcon,
    RiDatabase2Line,
} from 'react-icons/ri'
import classNames from 'classnames'

export function MenuPopover({
    icon,
    buttonClassName,
    placement = 'top-end',
    isHeader,
}: {
    icon: JSX.Element
    buttonClassName?: string
    placement?: ComponentProps<typeof Menu.Item>['placement']
    isHeader: boolean
}) {
    return (
        <Menu>
            <Menu.Button variant="icon" className={classNames(buttonClassName)}>
                {icon}
            </Menu.Button>
            <Menu.Items
                placement={placement}
                className={isHeader ? 'bg-gray-600' : 'min-w-[200px]'}
            >
                <Menu.ItemNextLink icon={<SettingsIcon />} href="/settings">
                    Settings
                </Menu.ItemNextLink>
                <Menu.ItemNextLink icon={<RiDatabase2Line />} href="/data-editor">
                    Fix my data
                </Menu.ItemNextLink>
                <Menu.Item icon={<LogoutIcon />} destructive={true} onClick={() => signOut()}>
                    Log out
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}
