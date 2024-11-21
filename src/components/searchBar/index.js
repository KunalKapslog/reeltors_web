import React from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Tab,
  Tabs,
  Chip,
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  LocationOn,
  Search,
  Tune
} from '@mui/icons-material';

const SearchbarWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  borderRadius: 50,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',

  [theme.breakpoints.up('lg')]: {
    padding: '24px 32px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    padding: '20px 24px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '12px 18px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 16px',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: 8,
  flex: 1,

  [theme.breakpoints.up('lg')]: {
    fontSize: 16,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: 15,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: 14,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 13,
  },
}));

const StyledSearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },

  [theme.breakpoints.up('lg')]: {
    padding: 12,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    padding: 10,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: 8,
  },
  [theme.breakpoints.down('sm')]: {
    padding: 6,
  },
}));

const PropertySearch = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const locations = ["New Delhi", "Dwarka", "Janakpuri", "Uttamnagar"];
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const getResponsiveValue = (xs, sm, md, lg) => {
    if (isXs) return xs;
    if (isSm) return sm;
    if (isMd) return md;
    return lg;
  };

  const handleChipClick = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  return (
    <Box sx={{
      maxWidth: 'lg',
      margin: 'auto',
      p: getResponsiveValue(1, 2, 2, 2),
    }}>
      {/* Navigation Tabs */}
      <Tabs
        value={tabValue}
        onChange={(e, v) => setTabValue(v)}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
          sx: {
            width: 'fit-content',
            height: '2px',
            left: '0',
          },
        }}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontFamily: 'Gilroy, Arial, sans-serif',
            fontWeight: 600, 
            fontSize: getResponsiveValue(12, 13, 14, 16),
            color: 'white',
            paddingX: 4, 
          },
          '& .Mui-selected': {
            color: 'transparent',
            background: 'linear-gradient(to right, #FF3131, #991D1D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
          '& .MuiTabs-indicator': {
            background: 'linear-gradient(to right, #FF3131, #991D1D)',
            height: '2px',
          },
          mb: getResponsiveValue(0.2, 1, 1, 1),
        }}
      >
        <Tab label="Buy" />
        <Tab label="Rent" />
        <Tab label="Commercial" />
        <Tab label="New Projects" />
        <Tab label="PG" />
        <Tab label="Builder Floor" />
      </Tabs>

      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: getResponsiveValue(0.5, 1, 1.5, 2),
          bgcolor: '#EEEEEE',
          borderRadius: '100px',
          p: getResponsiveValue(1, 1.5, 2, 2),
        }}
      >
        <SearchbarWrapper elevation={0}>
          <LocationOn sx={{
            color: 'text.secondary',
            fontSize: getResponsiveValue(18, 20, 22, 24)
          }} />
          <StyledInputBase
            placeholder="Search property near you..."
            fullWidth
          />
          <IconButton
            size={getResponsiveValue('small', 'small', 'medium', 'medium')}
            sx={{ p: getResponsiveValue(0.5, 0.75, 1, 1.25) }}
          >
            <Tune sx={{
              color: 'text.secondary',
              fontSize: getResponsiveValue(18, 20, 22, 24)
            }} />
          </IconButton>
        </SearchbarWrapper>

        <StyledSearchButton
          size={getResponsiveValue('small', 'small', 'medium', 'medium')}
          sx={{
            width: getResponsiveValue(36, 40, 50, 80), 
            height: getResponsiveValue(36, 40, 50, 80), 
          }}
        >
          <Search sx={{
            fontSize: getResponsiveValue(18, 20, 25, 40)
          }} />
        </StyledSearchButton>
      </Box>

      {/* Location Pills */}
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: getResponsiveValue(0.5, 0.75, 1, 1),
        mt: getResponsiveValue(1, 1.5, 2, 2),
        ml: 3
      }}>
        {locations.map((location) => (
          <Chip
            key={location}
            label={location}
            clickable
            size={isXs ? "small" : "medium"}
            onClick={() => handleChipClick(location)}
            sx={{
              bgcolor: selectedLocations.includes(location) ? '#FAFCF7' : '#FAFCF7',
              border: selectedLocations.includes(location)
                ? '1px solid red'
                : '1px solid #E6E8E1',
              '&:hover': {
                bgcolor: 'grey.200',
              },
              fontSize: getResponsiveValue(12, 13, 14, 14),
              height: getResponsiveValue(24, 28, 32, 32),
              boxShadow: '0px 4px 6px rgba(227, 227, 227, 0.5)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PropertySearch;
