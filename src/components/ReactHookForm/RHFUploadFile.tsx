import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Typography, useTheme } from '@mui/material';

export default function RHFUploadFile(props: any) {
  const theme = useTheme();
  const {
    disabled,
    name,
    label,
    accept = '.png, .jpg, .jpeg, .gif, .pdf, .doc, .docx, .xls, .xlsx, .csv',
    maxSize = 1024 * 1024 * 2,
    ...other
  } = props;

  const [borderColor, setBorderColor] = useState(
    disabled
      ? theme?.palette?.action?.disabledBackground
      : theme?.palette?.action?.focus,
  );

  const handleFileChange = (event: any) => {
    const file: any = event?.target?.files?.[0];

    if (file && file.size > maxSize) {
      // File size exceeds the allowed limit
      return;
    }

    other?.setValue(`${name}`, file);
    other?.trigger(`${name}`);
  };

  return (
    <>
      <label
        htmlFor={`${name}`}
        style={
          {
            height: '40px',
            borderRadius: '4px',
            border: `1px solid ${
              other?.formState?.errors?.[`${name}`] ? 'red' : borderColor
            }`,
            width: '100% !important',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: `${disabled ? '' : 'pointer'}`,
          } as React.CSSProperties
        }
        onMouseOver={() =>
          !disabled && setBorderColor(theme?.palette?.text?.primary)
        }
        onMouseLeave={() =>
          !disabled && setBorderColor(theme?.palette?.action?.focus)
        }
      >
        <div
          style={{
            paddingLeft: '10px',
            color: theme?.palette?.action?.disabled,
          }}
        >
          {/* trimming extra words */}
          {(other?.getValues(`${name}`)?.name?.length > 20
            ? '. . .' + other?.getValues(`${name}`)?.name?.slice?.(-15)
            : other?.getValues(`${name}`)?.name) ||
            label ||
            'Upload file'}
        </div>
        <FileUploadIcon
          sx={{
            color: borderColor,
            marginRight: '10px',
          }}
        />
      </label>
      <input
        {...other?.register(`${name}`)}
        type="file"
        accept={accept}
        disabled={disabled}
        name={`${name}`}
        id={`${name}`}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Typography variant="caption" color="error">
        {other?.formState?.errors?.[`${name}`] &&
          other?.formState?.errors?.[`${name}`]?.message}
      </Typography>
    </>
  );
}
