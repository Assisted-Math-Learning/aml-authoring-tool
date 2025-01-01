/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
import React from 'react';
import { ChevronUp, FileText, Layers, User2 } from 'lucide-react';

import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '../ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

// Menu items.
const items = [
  {
    title: 'Questions',
    url: '/app/questions',
    icon: FileText,
  },
  {
    title: 'Question Sets',
    url: '/app/question-sets',
    icon: Layers,
  },
];

export const AppSidebar = () => {
  const location = useLocation();

  const isActive = (link: string) => location.pathname === link;
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='bg-appPrimary text-white'>
        <SidebarTrigger label='AML Authoring Tool' />
      </SidebarHeader>
      <SidebarContent className='bg-appPrimary'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className='hover:bg-gray-700 hover:text-white'
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='bg-appPrimary'>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side='top'
                className='w-[--radix-popper-anchor-width]'
              >
                <AuthContext.Consumer>
                  {({ onLogout }) => (
                    <DropdownMenuItem
                      onClick={onLogout}
                      className='cursor-pointer'
                    >
                      <span role='button' onClick={onLogout}>
                        Logout
                      </span>
                    </DropdownMenuItem>
                  )}
                </AuthContext.Consumer>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};