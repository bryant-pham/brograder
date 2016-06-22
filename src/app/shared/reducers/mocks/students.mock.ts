import { Student } from "../../models";
import Immutable = require('immutable');


let stu1 = new Student.Builder().withFirstName('John').withLastName('Cena')
  .withClass('AM').withTeacherId('1').build();
let stu2 = new Student.Builder().withFirstName('Andy').withLastName('Murray')
  .withClass('AM').withTeacherId('1').build();
let stu3 = new Student.Builder().withFirstName('Mike').withLastName('Fay')
  .withClass('AM').withTeacherId('1').build();
let stu4 = new Student.Builder().withFirstName('Rock').withLastName('Lee')
  .withClass('AM').withTeacherId('1').build();
let stu5 = new Student.Builder().withFirstName('Spike').withLastName('Murray')
  .withClass('AM').withTeacherId('1').build();
let stu6 = new Student.Builder().withFirstName('Randy').withLastName('Cat')
  .withClass('AM').withTeacherId('1').build();
let stu7 = new Student.Builder().withFirstName('Miz').withLastName('Tag')
  .withClass('AM').withTeacherId('1').build();
let stu8 = new Student.Builder().withFirstName('Peter').withLastName('Nat')
  .withClass('AM').withTeacherId('1').build();
let stu9 = new Student.Builder().withFirstName('Anna').withLastName('Peterson')
  .withClass('AM').withTeacherId('1').build();
let stu10 = new Student.Builder().withFirstName('Muya').withLastName('Pole')
  .withClass('AM').withTeacherId('1').build();

let stu11 = new Student.Builder().withFirstName('Coober').withLastName('McCooberson')
  .withClass('PM').withTeacherId('1').build();
let stu12 = new Student.Builder().withFirstName('Austin').withLastName('Fyffe')
  .withClass('PM').withTeacherId('1').build();
let stu13 = new Student.Builder().withFirstName('Mary').withLastName('Slash')
  .withClass('PM').withTeacherId('1').build();
let stu14 = new Student.Builder().withFirstName('Apple').withLastName('McDaniel')
  .withClass('PM').withTeacherId('1').build();
let stu15 = new Student.Builder().withFirstName('Yas').withLastName('Molepan')
  .withClass('PM').withTeacherId('1').build();
let stu16 = new Student.Builder().withFirstName('Ahmad').withLastName('Jamal')
  .withClass('PM').withTeacherId('1').build();
let stu17 = new Student.Builder().withFirstName('Pop').withLastName('Zika')
  .withClass('PM').withTeacherId('1').build();
let stu18 = new Student.Builder().withFirstName('Mick').withLastName('Fly')
  .withClass('PM').withTeacherId('1').build();
let stu19 = new Student.Builder().withFirstName('Paula').withLastName('Pan')
  .withClass('PM').withTeacherId('1').build();
let stu20 = new Student.Builder().withFirstName('Paul').withLastName('Plott')
  .withClass('PM').withTeacherId('1').build();

export const STUDENT_MOCKS = Immutable.Map<string, Student>()
  .set(stu1.id, stu1)
  .set(stu2.id, stu2)
  .set(stu3.id, stu3)
  .set(stu4.id, stu4)
  .set(stu5.id, stu5)
  .set(stu6.id, stu6)
  .set(stu7.id, stu7)
  .set(stu8.id, stu8)
  .set(stu9.id, stu9)
  .set(stu10.id, stu10)
  .set(stu11.id, stu11)
  .set(stu12.id, stu12)
  .set(stu13.id, stu13)
  .set(stu14.id, stu14)
  .set(stu15.id, stu15)
  .set(stu16.id, stu16)
  .set(stu17.id, stu17)
  .set(stu18.id, stu18)
  .set(stu19.id, stu19)
  .set(stu20.id, stu20);
