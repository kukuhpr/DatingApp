export class User {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  email?: string;
}

export class UserLogin {
  id?: number;
  npp?: string;
  nama?: string;
  kodejabatan?: string;
  jabatan?: string;
  kodeunitkerja?: string;
  unitkerja?: string;
  kodekantor?: number;
  namakantor?: string;
  email?: string;
  isexternal?: boolean;
  iskomitenasional?: boolean;
  ispengelolainovasi?: boolean;
  isuserpimpinan?: boolean;
  isuseratasan?: boolean;
  satuankerja?: string;
  kodePenugasan?: number;
  role?: string;
}
