import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import More from '@mui/icons-material/MoreVert';
import Settings from '@mui/icons-material/SettingsOutlined';
import { ReactComponent as CalenderLogo } from './icons/BirthIcon.svg';
import { ReactComponent as ChatLogo } from './icons/chat.svg';
import { ReactComponent as CardLogo } from './icons/credit_card.svg';
import { ReactComponent as GroupLogo } from './icons/group.svg';
import { ReactComponent as HomeLogo } from './icons/home.svg';

import ProfilePhoto from './assets/senior-woman-doctor-profile.png';

interface Page {
    title: string;
    icon: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    > & { title?: string }>,
}

export const Header = () => {
    const pages: Page[] = [
        {
            title: 'Overview',
            icon: HomeLogo,
        },
        {
            title: 'Patients',
            icon: GroupLogo,
        },
        {
            title: 'Schedule',
            icon: CalenderLogo,
        },
        {
            title: 'Message',
            icon: ChatLogo,
        },
        {
            title: 'Transactions',
            icon: CardLogo,
        },
    ];

    const [selectedPage, setSelectedPage] = React.useState('Patients');

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar elevation={0} sx={{ padding: '18px' }} color='transparent' >
            <Box maxWidth="xl" sx={{
                backgroundColor: 'white',
                borderRadius: 70,
                paddingInline: '32px',
            }} >
                <Toolbar disableGutters sx={{ height: 72, }} >
                    <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} selected={page.title == selectedPage} onClick={() => setSelectedPage(page.title)}>
                                    <Box sx={{ width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} > <page.icon /> </Box>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Logo sx={{
                        display: { xs: 'flex', md: 'none', alignSelf: 'center' }, mr: 1,
                        flexGrow: 1,
                    }} />


                    <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                variant={selectedPage == page.title ? 'contained' : 'text'}
                                key={page.title}
                                tabIndex={-1}
                                startIcon={<page.icon />}
                                onClick={() => setSelectedPage(page.title)}
                                sx={{ marginInline: 0.5 }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar sx={{ width: '44px', height: '44px' }} alt="Remy Sharp" src={ProfilePhoto} />
                        </IconButton>
                    </Box>

                    <Box sx={{ marginInlineStart: '8px', marginInlineEnd: '25px', alignItems: 'center' }} >
                        <Typography fontWeight='bold' > Dr. Jose Simmons </Typography>
                        <Typography variant='subtitle1' > General Practitioner </Typography>
                    </Box>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Settings />
                        </IconButton>
                    </Tooltip>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <More />
                    </IconButton>

                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>


                </Toolbar>
            </Box>
        </AppBar>
    );
}

import { SxProps, Theme } from '@mui/material/styles';
import { ReactComponent as LogoImage } from './icons/logo.svg';

const Logo = ({ sx }: { sx?: SxProps<Theme> }) => (<Box sx={{ ...sx, width: 211, height: 48 }} >
    <LogoImage width={211} height={48} />
</Box>
);

export default Header;