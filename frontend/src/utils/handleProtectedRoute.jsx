



export const handleProtectedRoute = (
  isAuthenticated,
  setShowLoginPopup,
  navigate,
  path
) => {
  if (isAuthenticated) {
    navigate(path);
  } else {
    setShowLoginPopup(true);
  }
};
