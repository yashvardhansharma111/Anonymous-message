import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { NextResponse, NextRequest } from 'next/server'; // Import NextRequest for proper request handling

export async function POST(request: NextRequest) {
  // Connect to the database
  await dbConnect();

  try {
    // Parse the JSON body of the request
    const { username, code } = await request.json();

    // Decode the username
    const decodedUsername = decodeURIComponent(username);

    // Find the user by decoded username
    const user = await UserModel.findOne({ username: decodedUsername });
    
    // If user is not found, return a 404 response
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // Check if the verification code matches and hasn't expired
    const isCodeValid = user.verifyCode === code;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      // Update user's verification status
      user.isVerified = true;
      await user.save();

      return NextResponse.json(
        { success: true, message: 'Account verified successfully' },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      // Code has expired
      return NextResponse.json(
        {
          success: false,
          message: 'Verification code has expired. Please request a new code.',
        },
        { status: 400 }
      );
    } else {
      // Incorrect code
      return NextResponse.json(
        { success: false, message: 'Incorrect verification code' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying user:', error);

    // Handle any server errors
    return NextResponse.json(
      { success: false, message: 'Error verifying user' },
      { status: 500 }
    );
  }
}
