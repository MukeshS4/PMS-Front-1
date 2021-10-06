import { SideNavigationItem, SideNavigationItems, HeaderItem, SideNavigationSection } from "../models";
 
export const patientSideNavigationItem: SideNavigationItem[] = [
    {
        icon: 'pi pi-fw pi-th-large',
        label: 'Patient Registration',
        routerLink: '/patient',
    },
    
    {
        icon:'pi pi-fw pi-info-circle',
        label: 'Patient Visit Details',
        routerLink: '/patient/patient-visit',
    },
    {
        icon:'pi pi-fw pi-info-circle',
        label: 'Schedule Meeting',
        routerLink: '/patient/patient-meeting',
    },
    {
        icon:'pi pi-fw pi-info-circle',
        label: 'Patient Details',
        routerLink: '/patient/patient-details/',
    },
    {
        icon:'pi pi-fw pi-info-circle',
        label: 'Dashboard',
        routerLink: '/patient/home-page/',
    }
]