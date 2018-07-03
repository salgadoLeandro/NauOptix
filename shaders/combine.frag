#version 430

uniform sampler2D raster;
uniform sampler2D raytrace;

in vec2 TexCoord;

out vec4 outColor;

void main() {
    vec4 cr = texture(raster, TexCoord);
    vec4 rr = texture(raytrace, TexCoord);

    if (cr.w != 0.0f && rr.w == 0.0f)
        outColor = cr;
    else
        outColor = rr;
}