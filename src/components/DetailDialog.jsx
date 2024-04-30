import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FormattedDate from "../hooks/FormattedDate";
import { Chip } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function DetailDialog(props) {
  const movie = props.movie;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        SHOW
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle color="text.secondary" fontWeight="bold" sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          『{movie.title}』
          {movie.original_language === "ja" ? (
            <Chip size="small" label="邦画" color="primary" />
          ) : (
            <Chip size="small" label="洋画" color="primary" />
          )}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography variant='body2'>オリジナルタイトル：{movie.original_title}</Typography>
          <Typography variant='body2'>公開日：{FormattedDate(movie.release_date)}</Typography>
        </DialogContent>
        <DialogContent>
          <Typography gutterBottom>
            {movie.overview}
          </Typography>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </>
  );
}