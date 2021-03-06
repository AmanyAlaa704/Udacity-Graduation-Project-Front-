import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialDesign/material/material.module';
import { HeaderComponent } from './Layout/header/header.component';
import { SignUpComponent } from './Component/User/sign-up/sign-up.component';
import { SigINComponent } from './Component/User/sig-in/sig-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './Component/HomePage/home-page/home-page.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './Component/category/category.component';
import { CourseComponent } from './Component/course/course.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OrderDetailsComponent } from './Component/order-details/order-details.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { CareerPrepComponent } from './Component/career-prep/career-prep.component';
import {MatIconModule} from '@angular/material/icon';
import { NewPasswordComponent } from './Component/Settings/new-password/new-password.component';
import { NotificationsComponent } from './Component/Settings/notifications/notifications.component';
import { SettingsComponent } from './Component/Settings/settings/settings.component';
import { LinkedAccountComponent } from './Component/Settings/linked-account/linked-account.component';

import { CoursesFilterPipe } from './SharedModels/Interface/course-Filter';
import { UploadComponent } from './reusableComponents/upload/upload.component';
import { AdminDashBoardComponent } from './Admin-DashBoard/admin-dash-board/admin-dash-board.component';
import { CorporateSocialResponsibilityComponent } from './Component/corporate-social-responsibility/corporate-social-responsibility.component';
import { LecturesAdminComponent } from './Admin-DashBoard/lectures-admin/lectures-admin.component';
import { LessonContentAdminComponent } from './Admin-DashBoard/lesson-content-admin/lesson-content-admin.component';
import { CourseAdminComponent } from './Admin-DashBoard/course-admin/course-admin.component';


import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';

import { QuestionGroupAdminComponent } from './Admin-DashBoard/question-group-admin/question-group-admin.component';
import { QuestionAdminComponent } from './Admin-DashBoard/question-admin/question-admin.component';
import { QuestionOptionesAdminComponent } from './Admin-DashBoard/question-optiones-admin/question-optiones-admin.component';
import { TrueAndFalsesAdminComponent } from './Admin-DashBoard/true-and-falses-admin/true-and-falses-admin.component';

import { CourseVideosComponent } from './Admin-DashBoard/course-videos/course-videos.component';

import { GovernmentComponent } from './Component/government/government.component';
import { BecomeAnInstractorComponent } from './Component/become-an-instractor/become-an-instractor.component';
import { OverViewComponent } from './Component/over-view/over-view.component';
import { ApproachComponent } from './Component/approach/approach.component';
import { StudentSucessComponent } from './Component/student-sucess/student-sucess.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BecomeAMentorComponent } from './Component/become-amentor/become-amentor.component';
import { SolutionComponent } from './Component/solution/solution.component';
import { SubCategoryComponent } from './Admin-DashBoard/sub-category/sub-category.component';
import { LessonAdminComponent } from './Admin-DashBoard/lesson-admin/lesson-admin.component';
import { CategoryAdminComponent } from './Admin-DashBoard/category-admin/category-admin.component';
import { LanguagePreferenceComponent } from './Component/Settings/language-preference/language-preference.component';
import { SubscriptionsBillingComponent } from './Component/Settings/subscriptions-billing/subscriptions-billing.component';
import { CoursesComponent } from './Component/Settings/courses/courses.component';
import { LecturesComponent } from './Component/lectures&Lesson/lectures/lectures.component';
import { LessonsComponent } from './Component/lectures&Lesson/lessons/lessons.component';
import { LessonContentComponent } from './Component/lectures&Lesson/lesson-content/lesson-content.component';
import { CoreCurriculumComponent } from './Component/lectures&Lesson/core-curriculum/core-curriculum.component';
import { ProgramHomeComponent } from './Component/lectures&Lesson/program-home/program-home.component';
import { ResourcesComponent } from './Component/resources/resources.component';
import { AboutASComponent } from './Component/about-as/about-as.component';
import { CatalogComponent } from './Component/catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { PersonalInformationComponent } from './Component/Settings/personal-information/personal-information.component';
import { ClassRoomComponent } from './Component/class-room/class-room.component';

@NgModule({
  declarations: [
    QuestionGroupAdminComponent,
    QuestionOptionesAdminComponent,
    QuestionAdminComponent,
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SigINComponent,
    HomePageComponent,
    FooterComponent,
    CategoryComponent,
    CourseComponent,
    OrderDetailsComponent,
    PaymentComponent,
    CareerPrepComponent,
    ClassRoomComponent,
    PersonalInformationComponent,
    NewPasswordComponent,
    NotificationsComponent,
    SettingsComponent,
    LinkedAccountComponent,
    LanguagePreferenceComponent,
    SubscriptionsBillingComponent,
    QuestionGroupAdminComponent,
    QuestionOptionesAdminComponent,
    CoursesComponent,
    LecturesComponent,
    LessonsComponent,
    LessonContentComponent,
    CoreCurriculumComponent,
    QuestionAdminComponent,
    ProgramHomeComponent,
    ResourcesComponent,
    AboutASComponent,
    CatalogComponent,
    CoursesFilterPipe,
    UploadComponent,
    TrueAndFalsesAdminComponent,
    CatalogComponent,    
    CoursesFilterPipe,
    AdminDashBoardComponent,
    SubCategoryComponent,
    CorporateSocialResponsibilityComponent ,
    CorporateSocialResponsibilityComponent,
    LecturesAdminComponent,
    LessonContentAdminComponent,
    CategoryAdminComponent,
    CourseAdminComponent,
    LessonAdminComponent,
    PageNotFoundComponent,
    LecturesAdminComponent,
    LessonAdminComponent,
    GovernmentComponent,
    BecomeAnInstractorComponent,
    OverViewComponent,
    ApproachComponent,
    StudentSucessComponent,
    BecomeAMentorComponent,
    SolutionComponent,
    TrueAndFalsesAdminComponent,

    CourseVideosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    MatIconModule,
    FormsModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
